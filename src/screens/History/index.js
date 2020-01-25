import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { outfitSaveEndPoint } from '../../utils/config/config';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import styles from './styles';

export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: {
                icon: ''
            },
            hasData: false,
        }
    }

    loadHistory = async () => {
        try {
            const userDetails = await AsyncStorage.getItem("USER_DETAILS");
            const user = JSON.parse(userDetails);
            if (user !== null) {
                this.setState({
                    user: user,
                }, () => {
                    this.getHistory();
                });
            } else {
                console.log('storage is null');
            }
        } catch ( error ) {
            console.log(error);
        }
    }

    getHistory = () => {
        const {user} = this.state;
        var url = outfitSaveEndPoint + `${user.username}`;

        axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + user.jwt //the token is a variable which holds the token
            }
        }).then(({status, data}) => {
            console.log(status, data);
            if (status === 200) {
                this.setState({
                    history: data,
                    hasData: true
                });

                console.log(data);
            }
        });
    }

    historyView() {
        const {history} = this.state;

        return history.map((item, index) => (
            <View style={styles.cardItem}>
                        <View style={styles.dateBadge}>
                            <Text style={styles.date}>{item.currentWeather.date}</Text>
                        </View>
                        <View style={styles.weatherContainer}>
                            <Text style={styles.weather}>{item.currentWeather.temperature}℃</Text>
                            <Text style={styles.description}>{item.currentWeather.description}</Text>
                            <View style={styles.locationContainer}>
                                <Image source={require('../../images/location-pin.png')} style={{
                width: 16,
                height: 16
            }} />
                                <Text style={styles.location}>{item.currentWeather.locationName}</Text>
                            </View>
                        </View>
                        <View style={styles.iconContainer}>
                            <Image source={{
                uri: item.currentWeather.icon
            }} style={{
                width: 72,
                height: 72
            }} />
                        </View>
                    </View>
        ));
    }

    componentDidMount() {
        this.loadHistory();
    }

    render() {
        const {hasData} = this.state;
        return (
            <View style={styles.container}>
                {hasData === true ?
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {this.historyView()}
                </ScrollView>
                :
                <View>
                    <Text>No available data found. Please choose and rate outfit in the home screen to get your results.</Text>
                </View>
            }
            </View>
        );
    }
}
