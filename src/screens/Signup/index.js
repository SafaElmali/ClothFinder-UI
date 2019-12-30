import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Toaster } from '../../components/Toaster/index';
import SignupForm from './components/Form/index';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import KeyboardEvent from '../../components/Keyboard/index';
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
            isKeyboardOpen: false,
            displayToaster: false,
            toasterText: '',
            toasterType: '',
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

    // Handle user signup inputs
    handleSignupStatus = (status, statusText, toasterType) => {
        const { navigation } = this.props;

        if (status) {
            this.setState({ displayToaster: true, toasterText: statusText, toasterType: toasterType });
            setTimeout(() => {
                this.setState({ displayToaster: false }, () => {
                    navigation.navigate('Login');
                })
            }, 2500);
        } else {
            this.setState({ displayToaster: true, toasterText: statusText, toasterType: toasterType });
            setTimeout(() => {
                this.setState({ displayToaster: false })
            }, 3000);
        }
    }

    render() {
        const { isKeyboardOpen, displayToaster, toasterText, toasterType } = this.state;
        const { navigation } = this.props;

        return (
            <SafeAreaView style={styles.container}>
                {displayToaster ?
                    <Toaster text={toasterText} type={toasterType} /> : null
                }
                <KeyboardEvent keyboardShow={this._keyboardDidShow} keyboardHide={this._keyboardDidHide} />
                {!isKeyboardOpen === true ?
                    <View style={styles.header}>
                        <Header imagePath={require('../../images/standing-6.png')} />
                    </View> : null
                }
                <View style={styles.formContent}>
                    <SignupForm handleSignupStatus={this.handleSignupStatus} />
                </View>
                {!isKeyboardOpen === true ?
                    <View style={styles.footer}>
                        <Footer onClick={navigation} text="Already have an account?" navigate_text=" Sign in." screen_name="Login" />
                    </View> : null
                }
            </SafeAreaView>
        );
    }
}

