import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';


export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        this.checkStorage();
    }

    //Check AsyncStorage has values
    checkStorage = async () => {
        try {
            const userDetails = await AsyncStorage.getItem("USER_DETAILS");
            if (userDetails !== null) {
                this.setState({
                    username: userDetails.username,
                    email: userDetails.email
                });
            }
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