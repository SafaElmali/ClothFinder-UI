import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Toast } from 'native-base';
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
    };

    constructor() {
        super();
        this.state = {
            isKeyboardOpen: false,
        }
    }

    // Handle user signup inputs
    handleSignupStatus = (status, statusText) => {
        const { navigation } = this.props;

        if (status) {
            Toast.show({
                text: statusText,
                type: "success",
                buttonText: "Okay",
                duration: 3000
            })
            setTimeout(() => {
                navigation.navigate('Login');
            }, 2000);
        } else {
            Toast.show({
                text: statusText,
                type: "warning",
                buttonText: "Okay",
                duration: 3000
            })
        }
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

    render() {
        const { isKeyboardOpen } = this.state;
        const { navigation } = this.props;

        return (
            <SafeAreaView style={styles.container}>
                <KeyboardEvent keyboardShow={this._keyboardDidShow} keyboardHide={this._keyboardDidHide} />
                {!isKeyboardOpen === true ?
                    <View style={styles.header}>
                        <Header imagePath={require('../../images/standing-6.png')} />
                    </View> : null
                }
                <View style={styles.formContent}>
                    <SignupForm onSignupStatus={this.handleSignupStatus} />
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

