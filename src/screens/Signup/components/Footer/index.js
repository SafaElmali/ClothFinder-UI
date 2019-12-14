import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const Footer = (props) => {
    const { navigate } = props.onClick;

    return (
        <>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Text style={styles.signInText} onPress={() => navigate('Login')}> Sign in</Text>
        </>
    );
}

export default Footer;
