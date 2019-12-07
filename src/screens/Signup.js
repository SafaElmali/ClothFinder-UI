import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    //Save user signup details to AsyncStorage
    saveToStorage = async (user) => {
        try {
            await AsyncStorage.setItem("USER_DETAILS", user)
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <>
            </>
        );
    }
}