import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { registerLocalPoint } from '../../../../utils/config/config';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const SignupForm = props => {
    const [user, setUser] = useState({ username: '', email: '', password: '' });
    const [displayPassword, setPasswordShow] = useState(false);
    const [loading, setLoading] = useState(false);

    // Show/Hide user password
    const onPasswordDisplay = () => {
        setPasswordShow(!displayPassword);
    }

    // Save user signup details to AsyncStorage if response status is success
    const handleFormSignup = () => {
        const { onSignupStatus } = props;
        setLoading(true);

        axios.post(registerLocalPoint, user).then(({ status }) => {
            if (status === 200) {
                setLoading(false);
                onSignupStatus(true, 'You registered Successfully 🤩\nreturning to login 🚀');
            }
        }).catch(err => {
            if (err.response.status === 409) {
                setLoading(false);
                onSignupStatus(true, err.response.data);
            } else if (err.response.status === 422) {
                setLoading(false);
                onSignupStatus(false, err.response.data);
            }
        });
    }

    return (
        <View>
            <Input
                label="Username"
                leftIcon={
                    <Icon name='user' size={18} color="#6c706d" />
                }
                onChangeText={name => setUser({ ...user, username: name })}
                value={user.username}
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
                onChangeText={email => setUser({ ...user, email: email.trim() })}
                value={user.email}
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
                onChangeText={password => setUser({ ...user, password: password.trim() })}
                value={user.password}
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
                    loading={loading}
                    icon={
                        <Icon name='check-circle' size={18} color="#2089dc" />
                    }
                    titleStyle={styles.buttonTitle}
                    onPress={handleFormSignup}
                />
            </View>
        </View>
    )
}

export default SignupForm;