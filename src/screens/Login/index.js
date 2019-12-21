import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import KeyboardEvent from '../../components/Keyboard/index';
import Header from '../../components/Header/index';
import styles from './styles';
import LoginForm from './components/Form';
import Footer from '../../components/Footer/index';
import axios from 'axios';
import { loginLocalPoint } from '../../utils/config';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
        headerBackTitle: 'Login'
    };

    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: '',
                jwt: ''
            },
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

    //check user username and password in db. If its true then navigate to the home
    // TODO catch method
    handleLogin = (username, password) => {
        axios.post(loginLocalPoint, { username: username, password: password }).then(res => {
            if (res.status === 200) {
                this.setState({
                    user: {
                        username: username,
                        password: password,
                        jwt: res.data.jwt
                    }
                }, async () => {
                    const { user } = this.state;
                    console.log(user);
                    await AsyncStorage.setItem("USER_DETAILS", JSON.stringify(user));
                    this.props.navigation.navigate('Home', { user: { username: user.username, jwt: user.jwt } });
                });
            } else if (res.status === 403) {
                console.log("Username or password is not valid!");
            }
        });
    }

    //Check AsyncStorage has Item
    checkStorage = async () => {
        try {
            const userDetails = await AsyncStorage.getItem("USER_DETAILS");
            const user = JSON.parse(userDetails);
            if (user !== null) {
                this.setState({
                    user: {
                        username: user.username,
                        password: user.password
                    }
                }, () => {
                    const { user } = this.state;
                    this.handleLogin(user.username, user.password);
                });
            } else {
                console.log('storage is null');
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
                    <LoginForm onLogin={this.handleLogin} />
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

