import React, { Component } from 'react';
import { View, SafeAreaView, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import KeyboardEvent from '../../components/Keyboard/index';
import Header from '../../components/Header/index';
import styles from './styles';
import LoginForm from './components/Form';
import Footer from '../../components/Footer/index';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
        headerBackTitle: 'Login'
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isKeyboardOpen: false
        }
    }

    componentDidMount() {
        this.checkStorage();
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

    handleLogin = (name, password) => {
        this.setState({
            name,
            password
        });
    }

    //Check AsyncStorage has Item
    checkStorage = async () => {
        try {
            const userDetails = await AsyncStorage.getItem("USER_DETAILS");
            const user = JSON.parse(userDetails);
            if (user !== null) {
                this.setState({
                    username: user.username,
                    password: user.password
                }, () => { console.log(this.state) });
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { isKeyboardOpen } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardEvent keyboardShow={this._keyboardDidShow} keyboardHide={this._keyboardDidHide} />
                {!isKeyboardOpen === true ?
                    <View style={styles.header}>
                        <Header imagePath={require('../../images/standing-19.png')} />
                    </View> : null
                }
                <View style={styles.loginFormContent}>
                    <LoginForm onLogin={this.handleLogin} user={this.state} />
                </View>
                {!isKeyboardOpen === true ?
                    <View style={styles.footer}>
                        <Footer onClick={this.props.navigation} text="Don't have an account?" navigate_text=" Create one." screen_name="Signup" />
                    </View> : null
                }
            </SafeAreaView>
        );
    }
}
