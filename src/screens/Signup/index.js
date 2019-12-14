import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Form from './components/Form';
import Header from './components/Header/index';
import Footer from './components/Footer/index'
import styles from './styles.js';

export default class Signup extends Component {
    static navigationOptions = {
        title: 'Signup',
        headerBackTitle: 'Signup',
        headerStyle: {
            backgroundColor: '#f7f7f7',
        },
        headerTitleStyle: {
            color: '#000'
        },
    };

    constructor() {
        super();
        this.state = {
            user: {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    registerUser = (name, email, password) => {
        this.setState({
            user: {
                name,
                email,
                password
            }
        }, () => this.saveToStorage(this.state.user));
    }

    //Save user signup details to AsyncStorage
    saveToStorage = async (user) => {
        try {
            await AsyncStorage.setItem("USER_DETAILS", JSON.stringify(user))
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Header />
                </View>
                <View style={styles.formContent}>
                    <Form onSignup={this.registerUser} />
                </View>
                <View style={styles.footer}>
                    <Footer onClick={this.props.navigation} />
                </View>
            </SafeAreaView>
        );
    }
}

