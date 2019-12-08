import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Signup extends Component {
    static navigationOptions = () => {
        return {
            headerRight: () => (
                <Button
                    title="Signup"
                    color={Platform.OS === 'ios' ? '#000' : null}
                />
            ),
        };
    };

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    //Save user signup details to AsyncStorage
    saveToStorage = async (user) => {
        try {
            await AsyncStorage.setItem("USER_DETAILS", user)
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Signup</Text>
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