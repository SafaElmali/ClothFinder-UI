import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import LogoutButton from './components/LogoutButton/index';

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Screen</Text>
                <LogoutButton onClick={navigation} />
            </View>
        )
    }
}