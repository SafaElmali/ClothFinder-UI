import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { loginLocalPoint } from '../../utils/config/config';
import { Toast } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import KeyboardEvent from '../../components/Keyboard/index';
import Header from '../../components/Header/index';
import styles from './styles';
import LoginForm from './components/Form';
import Footer from '../../components/Footer/index';
import axios from 'axios';

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
                jwt: '',
            },
            isKeyboardOpen: false,
            loading: false
        }
    }

    // Check storage to login automatically if there are user details
    componentDidMount() {
        this.checkStorage();
    }

    // Check user username and password in db. If it returns success then navigate to home screen
    handleLogin = (username, password, toasterStatus) => {
        this.setState({
            loading: true
        });
        axios.post(loginLocalPoint, { username: username, password: password }).then(({ data, status }) => {
            if (status === 200) {
                this.setState({
                    user: {
                        username: username,
                        jwt: data.jwt
                    },
                    loading: false
                }, async () => {
                    const { user } = this.state;
                    const { navigation } = this.props;

                    await AsyncStorage.setItem("USER_DETAILS", JSON.stringify(user));
                    navigation.navigate('Home', { user: { username: user.username, jwt: user.jwt } });
                });
            }
        }).catch(err => {
            if (err.response.status === 403) {
                Toast.show({
                    text: "Username or Password invalid",
                    buttonText: "Okay",
                    type: "warning",
                    duration: 3000
                })
                this.setState({
                    loading: false
                });
            }
        })
    }

    // Hide some component to display input areas clearly when keyboard opened
    _keyboardDidShow = () => {
        this.setState({
            isKeyboardOpen: true
        });
    }

    // Show hidden components after keyboard closed 
    _keyboardDidHide = () => {
        this.setState({
            isKeyboardOpen: false
        });
    }

    //Check AsyncStorage has Item
    checkStorage = async () => {
        try {
            const userDetails = await AsyncStorage.getItem("USER_DETAILS");
            const user = JSON.parse(userDetails);
            if (user !== null) {
                const { navigation } = this.props;

                navigation.navigate('Home', { user: { username: user.username, jwt: user.jwt } });
            } else {
                console.log('storage is null');
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { isKeyboardOpen, loading } = this.state;
        const { navigation } = this.props;

        return (
            <SafeAreaView style={styles.container}>
                <KeyboardEvent keyboardShow={this._keyboardDidShow} keyboardHide={this._keyboardDidHide} />
                {!isKeyboardOpen === true ?
                    <View style={styles.header}>
                        <Header imagePath={require('../../images/standing-19.png')} />
                    </View> : null
                }
                <View style={styles.loginFormContent}>
                    <LoginForm onLogin={this.handleLogin} isLoading={loading} />
                </View>
                {!isKeyboardOpen === true ?
                    <View style={styles.footer}>
                        <Footer onClick={navigation} text="Don't have an account?" navigate_text=" Create one." screen_name="Signup" />
                    </View> : null
                }

            </SafeAreaView>
        );
    }
}

