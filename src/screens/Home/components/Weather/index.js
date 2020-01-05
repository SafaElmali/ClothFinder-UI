import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { currentWeatherEndpoint, forecastWeatherEndpoint } from '../../../../utils/config/config';
import axios from 'axios';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jwt: this.props.jwt,
            currentWeather: {
                icon: ''
            }
        }
    }

    componentDidMount() {
        axios.get(currentWeatherEndpoint + "?lat=40.953187&lon=29.121463", {
            headers: {
                Authorization: 'Bearer ' + this.state.jwt //the token is a variable which holds the token
            }
        }).then(({ status, data }) => {
            if (status === 200) {
                this.setState({
                    currentWeather: data
                });
                console.log(this.state);
            }
        });

        axios.get(forecastWeatherEndpoint + "?lat=40.953187&lon=29.121463", {
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

    render() {
        const { currentWeather } = this.state;
        return (
            <View style={styles.weatherCard}>
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
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    weatherCard: {
        flex: 1,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 16,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 4,
    },
    weatherContent: {
        flex: 1,
    },
    currentWeather: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingBottom: 20,
        borderBottomColor: '#efefef'
    },
    forecastWeather: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    currentWeatherIconContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    currentWeatherInfoContainer: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    currentWeatherLocationContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    currentWeatherDescriptionContainer: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    currentWeatherValueContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    currentWeatherValue: {
        fontSize: 32,
    },
    forecastWeatherGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    forecastWeatherItem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    forecastWeatherValue: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 4,
    },
    forecastWeatherDay: {
        fontSize: 12,
        color: '#9f9f9f',
        marginTop: 2,
    }
});