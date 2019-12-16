import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import KeyboardEvent from '../../components/Keyboard/index';
import Header from '../../components/Header/index';
import styles from './styles';
import LoginForm from './components/Form';
import Footer from '../Signup/components/Footer';

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

    //Check AsyncStorage has Item
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

    render() {
        const { navigate } = this.props.navigation;
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
                    <LoginForm />
                </View>
                <View style={styles.footer}>
                    <Text onPress={() => { navigate('Signup') }} style={{ alignSelf: 'center' }}>Create an Account</Text>
                </View>
            </SafeAreaView>
        );
    }
}
