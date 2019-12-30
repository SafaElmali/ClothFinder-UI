import React from 'react';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

const LogoutButton = (props) => {

    const logoutUser = async () => {
        const { navigate } = props.onClick;

        try {
            await AsyncStorage.removeItem("USER_DETAILS");
            navigate('Login');
        }
        catch (exception) {
            return false;
        }
    }

    return <Button onPress={logoutUser} title="Logout" />
}

export default LogoutButton;