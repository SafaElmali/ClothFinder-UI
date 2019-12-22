import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { registerLocalPoint } from '../../utils/config';
import AsyncStorage from '@react-native-community/async-storage';
import SignupForm from './components/Form/index';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import KeyboardEvent from '../../components/Keyboard/index';
import styles from './styles.js';
import axios from 'axios';
import { WarningToaster } from '../../components/Toaster/index';

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
                username: '',
                email: '',
                password: ''
            },
            isKeyboardOpen: false,
            displayWarning: false,
            warningText: ''
        }
    }

    _keyboardDidShow = () => {
        this.setState({
            isKeyboardOpen: true
        });
    }

    _keyboardDidHide = () => {
        this.setState({
            isKeyboardOpen: false
        });
    }

    registerUser = (username, email, password) => {
        this.setState({
            user: {
                username,
                email,
                password
            }
        }, () => this.saveToStorage(this.state.user));
    }

    //Save user signup details to AsyncStorage
    saveToStorage = (user) => {
        try {
            axios.post(registerLocalPoint, user).then(res => {
                if (res.status === 200) {
                    AsyncStorage.setItem("USER_DETAILS", JSON.stringify(user));
                    this.props.navigation.navigate('Login', { user });
                }
            }).catch(err => {
                if (err.response.status === 409) {
                    this.setState({ displayWarning: true, warningText: err.response.data })
                    setTimeout(() => {
                        this.setState({ displayWarning: false })
                    }, 2500)
                }
                if (err.response.status === 422) {
                    this.setState({ displayWarning: true, warningText: err.response.data })
                    setTimeout(() => {
                        this.setState({ displayWarning: false })
                    }, 2500)
                }
            });
        } catch (error) {
            this.setState({ displayWarning: true, warningText: error })
            setTimeout(() => {
                this.setState({ displayWarning: false })
            }, 2500);
        }
    }

    render() {
        const { isKeyboardOpen, displayWarning, warningText } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                {displayWarning ?
                    <WarningToaster text={warningText} /> : null
                }
                <KeyboardEvent keyboardShow={this._keyboardDidShow} keyboardHide={this._keyboardDidHide} />
                {!isKeyboardOpen === true ?
                    <View style={styles.header}>
                        <Header imagePath={require('../../images/standing-6.png')} />
                    </View> : null
                }
                <View style={styles.formContent}>
                    <SignupForm onSignup={this.registerUser} />
                </View>
                {!isKeyboardOpen === true ?
                    <View style={styles.footer}>
                        <Footer onClick={this.props.navigation} text="Already have an account?" navigate_text=" Sign in." screen_name="Login" />
                    </View> : null
                }
            </SafeAreaView>
        );
    }
}

