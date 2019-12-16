import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const SignupForm = (props) => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayPassword, setPasswordShow] = useState(false);

    const onPasswordDisplay = () => {
        setPasswordShow(!displayPassword);
    }

    const handleSignup = () => {
        const { onSignup } = props;
        onSignup(username.trim(), email, password);
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <View>
            <Input
                label="Username"
                leftIcon={
                    <Icon name='user' size={18} color="#6c706d" />
                }
                onChangeText={name => setName(name)}
                value={username}
                containerStyle={styles.container}
                placeholderTextColor='#d3d3d3'
                inputStyle={styles.inputText}
                labelStyle={styles.label}
                inputContainerStyle={styles.inputContainer}
            />
            <Input
                label="E-mail"
                leftIcon={
                    <Icon name='paper-plane' size={18} color="#6c706d" />
                }
                onChangeText={email => setEmail(email.trim())}
                value={email}
                containerStyle={styles.container}
                placeholderTextColor='#d3d3d3'
                inputStyle={styles.inputText}
                labelStyle={styles.label}
                inputContainerStyle={styles.inputContainer}
            />
            <Input
                label="Password"
                leftIcon={
                    <Icon
                        name='lock'
                        size={18}
                        color="#6c706d" />
                }
                rightIcon={
                    <Icon
                        name={displayPassword === false ? 'eye' : 'eye-slash'}
                        size={18}
                        color="#6c706d"
                        onPress={onPasswordDisplay}
                    />
                }
                secureTextEntry={displayPassword === false ? true : false}
                onChangeText={password => setPassword(password.trim())}
                value={password}
                containerStyle={styles.container}
                placeholderTextColor='#d3d3d3'
                inputStyle={styles.inputText}
                labelStyle={styles.label}
                inputContainerStyle={styles.inputContainer}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Signup"
                    type="clear"
                    containerStyle={styles.button}
                    iconRight
                    icon={
                        <Icon name='check-circle' size={22} color="#2089dc" />
                    }
                    titleStyle={styles.buttonTitle}
                    onPress={handleSignup}
                />
            </View>
        </View>
    )
}

export default SignupForm;