import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles';

const Header = () => {
    return (
        <>
            <Text style={{ color: 'red' }}>Signup</Text>
            <Image
                style={{ transform: [{ scale: 0.3 }] }}
                source={require('../../../../images/standing-6.png')}
            />
        </>
    )
}

export default Header;