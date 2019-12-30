import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

//Pass footer text and screen name for navigation
const Footer = (props) => {
    const { navigate_text, screen_name, text } = props;
    const { navigate } = props.onClick;

    return (
        <>
            <Text style={styles.footerText}>{text}</Text>
            <Text style={styles.signInText} onPress={() => navigate(screen_name)}>{navigate_text}</Text>
        </>
    );
}

export default Footer;
