import React, { Component } from 'react';
import { View, Platform, Linking, Alert } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { currentWeatherEndpoint, forecastWeatherEndpoint } from '../../../../utils/config/config';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import AccessCard from '../LocationAccess/index';
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
            accuracy: false,
            forecastWeather: []
        }

        Geolocation.watchPosition(success => {
            this.getCurrentWeather(success.coords.latitude, success.coords.longitude);
            this.getForecastWeather(success.coords.latitude, success.coords.longitude);
        }, (error) => {
            console.log(error);
        })
    }

    componentDidMount() {
        this.getLocationPermission();
    }

    goToSettings = async () => {
        // Linking.openSettings();
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
        const { accuracy } = this.state;

        Geolocation.getCurrentPosition(success => {
            this.getCurrentWeather(success.coords.latitude, success.coords.longitude);
            this.getForecastWeather(success.coords.latitude, success.coords.longitude);
        },
            (error) => {
                if (Platform.OS === 'ios' && error.code === 1) {
                    Alert.alert(
                        'Allow "ClothFinder" to access your location while you are using the app',
                        'Your current location will be displayed on the screen and used for weather details',
                        [
                            { text: 'Cancel', onPress: () => console.log("CANCEL"), style: 'cancel' },
                            { text: 'OK', onPress: () => this.goToSettings() }
                        ]
                    )
                } else if (Platform.OS === 'android' && error.code === 2) {
                    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({ interval: 10000, fastInterval: 5000 })
                        .then(data => {
                            // The user has accepted to enable the location services
                            // data can be :
                            //  - "already-enabled" if the location services has been already enabled
                            //  - "enabled" if user has clicked on OK button in the popup
                            this.setState({
                                hasAccess: true
                            });
                            this.getLocationPermission();
                        }).catch(err => {
                            console.log(err);
                            // The user has not accepted to enable the location services or something went wrong during the process
                            // "err" : { "code" : "ERR00|ERR01|ERR02", "message" : "message"}
                            // codes : 
                            //  - ERR00 : The user has clicked on Cancel button in the popup
                            //  - ERR01 : If the Settings change are unavailable
                            //  - ERR02 : If the popup has failed to open
                        });
                } else if (Platform.OS === 'android' && error.code === 3) {
                    console.log(error);
                    this.setState({
                        accuracy: !accuracy
                    });
                }
            },
            { enableHighAccuracy: accuracy, timeout: 2000 });
    }

    getCurrentWeather = (latitude, longitude) => {
        const { jwt } = this.state;

        axios.get(currentWeatherEndpoint + `?lat=${latitude}&lon=${longitude}`, {
            headers: {
                Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
            }
        }).then(({ status, data }) => {
            if (status === 200) {
                this.setState({
                    currentWeather: data,
                    hasAccess: true
                }, () => {
                    const { onHandleCurrentWeather } = this.props;
                    const { currentWeather } = this.state;
                    onHandleCurrentWeather(currentWeather);
                });
            }
        });
    }

    getForecastWeather = (latitude, longitude) => {
        const { jwt } = this.state;

        axios.get(forecastWeatherEndpoint + `?lat=${latitude}&lon=${longitude}`, {
            headers: {
                Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
            }
        }).then(({ status, data }) => {
            if (status === 200) {
                this.setState({
                    forecastWeather: data
                });
            }
        });
    }

    forecastWeatherView() {
        const { forecastWeather } = this.state;

        return forecastWeather.map((forecast, index) => (
            <View key={index} style={styles.forecastWeatherItem}>
                <Image source={{ uri: forecast.icon }} style={{ width: 32, height: 32 }} />
                <Text style={styles.forecastWeatherValue}>{forecast.temperature}℃</Text>
                <Text style={styles.forecastWeatherDay}>{forecast.date}</Text>
            </View>
        ));
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
                                    <Text style={styles.currentWeatherDescription}>{currentWeather.description}</Text>
                                </View>
                            </View>
                            <View style={styles.currentWeatherValueContainer}>
                                <Text style={styles.currentWeatherValue}>{currentWeather.temperature}℃</Text>
                            </View>
                        </View>
                        <View style={styles.forecastWeather}>
                            <View style={styles.forecastWeatherGroup}>
                                {this.forecastWeatherView()}
                            </View>
                        </View>
                    </View> : <AccessCard onClick={this.getLocationPermission} />
                }
            </View>
        );
    }
}
