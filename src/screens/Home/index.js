import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

export default class Home extends Component {
    constructor() {
        super();
    }

    logoutUser = async () => {
        try {
            await AsyncStorage.removeItem("USER_DETAILS");
            this.props.navigation.navigate('Login');
        }
        catch (exception) {
            return false;
        }
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Text>username: {JSON.stringify(navigation.getParam('user'))}</Text>
                <Button onPress={this.logoutUser} title="Logout" />
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