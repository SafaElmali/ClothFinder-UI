import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, SafeAreaView, Keyboard } from 'react-native';
import Header from '../Signup/components/Header/index';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
        headerBackTitle: 'Login'
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
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

    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Header imagePath={require("../../images/standing-5.png")} />
                </View>
                <View style={styles.container}>
                    <Button title="Login" onPress={() => navigate('App')} />
                    <Text onPress={() => { navigate('Signup') }} style={{ alignSelf: 'center' }}>Create an Account</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7'
    },
});