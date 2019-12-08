import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
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
        return (
            <View style={styles.container}>
                <Button title="Login" onPress={() => this.props.navigation.navigate('App')} />
                <Text onPress={() => { this.props.navigation.navigate('Signup') }} style={{ alignSelf: 'center' }}>Create an Account</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
});