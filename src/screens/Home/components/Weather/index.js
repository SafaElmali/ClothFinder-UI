import React, { Component } from 'react';
import { View, Platform, Linking, Alert } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { currentWeatherEndpoint, forecastWeatherEndpoint } from '../../../../utils/config/config';
import AccessCard from '../AccessCard/index';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import styles from './styles';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jwt: this.props.jwt,
            currentWeather: {
                icon: ''
            },
            hasAccess: false,
        }
    }

    goToSettings = async () => {
        const settingsUrl = 'app-settings:'
        const canOpenSettings = await Linking.canOpenURL(settingsUrl);
        if (canOpenSettings) {
            Linking.openURL(settingsUrl)
        } else {
            console.log("No access!");
        }
    }

    //Android location permission fix - https://github.com/facebook/react-native/issues/7495
    getLocationPermission = () => {
        Geolocation.getCurrentPosition(success => {
            this.getCurrentWeather(success.coords.latitude, success.coords.longitude);
            this.getForecastWeather(success.coords.latitude, success.coords.longitude);
        },
            (error) => {
                console.log(error);
                if (Platform.OS === 'ios' && error.PERMISSION_DENIED == 1) {
                    Alert.alert(
                        'Allow "ClothFinder" to access your location while you are using the app',
                        'Your current location will be displayed on the screen and used for weather details',
                        [
                            { text: 'Cancel', onPress: () => console.log("CANCEL"), style: 'cancel' },
                            { text: 'OK', onPress: () => this.goToSettings() }
                        ]
                    )
                }
            },
            { enableHighAccuracy: false, timeout: 2000 });
    }

    getCurrentWeather = (latitude, longitude) => {
        axios.get(currentWeatherEndpoint + `?lat=${latitude}&lon=${longitude}`, {
            headers: {
                Authorization: 'Bearer ' + this.state.jwt //the token is a variable which holds the token
            }
        }).then(({ status, data }) => {
            if (status === 200) {
                this.setState({
                    currentWeather: data,
                    hasAccess: true
                });
                console.log(this.state);
            }
        });
    }

    getForecastWeather = (latitude, longitude) => {
        axios.get(forecastWeatherEndpoint + `?lat=${latitude}&lon=${longitude}`, {
            headers: {
                Authorization: 'Bearer ' + this.state.jwt //the token is a variable which holds the token
            }
        }).then(({ status, data }) => {
            if (status === 200) {
                this.setState({
                    forecastWeather: data
                });
                console.log(this.state);
            }
        });
    }

    componentDidMount() {
        this.getLocationPermission();
    }

    render() {
        const { currentWeather, hasAccess } = this.state;
        return (
            <View style={styles.weatherCard}>
                {hasAccess === true ?
                    <View style={styles.weatherContent}>
                        <View style={styles.currentWeather}>
                            <View style={styles.currentWeatherIconContainer}>
                                <Image source={{ uri: currentWeather.icon }} style={{ width: 128, height: 128 }} />
                            </View>
                            <View style={styles.currentWeatherInfoContainer}>
                                <View style={styles.currentWeatherLocationContainer}>
                                    <Image source={require('../../../../images/location-pin.png')} style={{ width: 16, height: 16 }} />
                                    <Text style={styles.currentWeatherLocation}>{currentWeather.locationName}</Text>
                                </View>
                                <View style={styles.currentWeatherDescriptionContainer}>
                                    <Text>{currentWeather.description}</Text>
                                </View>
                            </View>
                            <View style={styles.currentWeatherValueContainer}>
                                <Text style={styles.currentWeatherValue}>{currentWeather.temperature}℃</Text>
                            </View>
                        </View>
                        <View style={styles.forecastWeather}>
                            <View style={styles.forecastWeatherGroup}>
                                <View style={styles.forecastWeatherItem}>
                                    <Image source={require('../../../../images/mock-sunny.png')} style={{ width: 32, height: 32 }} />
                                    <Text style={styles.forecastWeatherValue}>4℃</Text>
                                    <Text style={styles.forecastWeatherDay}>Sat</Text>
                                </View>
                            </View>
                            <View style={styles.forecastWeatherGroup}>
                                <View style={styles.forecastWeatherItem}>
                                    <Image source={require('../../../../images/mock-partly-cloudy.png')} style={{ width: 32, height: 32 }} />
                                    <Text style={styles.forecastWeatherValue}>3℃</Text>
                                    <Text style={styles.forecastWeatherDay}>Sun</Text>
                                </View>
                            </View>
                            <View style={styles.forecastWeatherGroup}>
                                <View style={styles.forecastWeatherItem}>
                                    <Image source={require('../../../../images/mock-rainy.png')} style={{ width: 32, height: 32 }} />
                                    <Text style={styles.forecastWeatherValue}>2℃</Text>
                                    <Text style={styles.forecastWeatherDay}>Mon</Text>
                                </View>
                            </View>
                            <View style={styles.forecastWeatherGroup}>
                                <View style={styles.forecastWeatherItem}>
                                    <Image source={require('../../../../images/mock-partly-cloudy.png')} style={{ width: 32, height: 32 }} />
                                    <Text style={styles.forecastWeatherValue}>6℃</Text>
                                    <Text style={styles.forecastWeatherDay}>Tue</Text>
                                </View>
                            </View>
                        </View>
                    </View> : <AccessCard onClick={this.getLocationPermission} />
                }
            </View>
        );
    }
}
