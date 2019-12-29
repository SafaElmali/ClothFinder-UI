import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { registerLocalPoint } from '../../../../utils/config';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const SignupForm = (props) => {
    const [user, setUser] = useState({ username: '', email: '', password: '' });
    const [displayPassword, setPasswordShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const onPasswordDisplay = () => {
        setPasswordShow(!displayPassword);
    }

    //Save user signup details to AsyncStorage if response status is success
    const handleFormSignup = () => {
        const { handleSignupStatus } = props;
        setLoading(true);

        axios.post(registerLocalPoint, user).then(({ status }) => {
            if (status === 200) {
                setLoading(false);
                AsyncStorage.setItem("USER_DETAILS", JSON.stringify(user));
                handleSignupStatus(true, 'You registered Successfully 🤩\nreturning to login 🚀', 'Success');
            }
        }).catch(err => {
            if (err.response.status === 409) {
                setLoading(false);
                handleSignupStatus(false, err.response.data, 'Warning');
            } else if (err.response.status === 422) {
                setLoading(false);
                handleSignupStatus(false, err.response.data, 'Warning');
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
                        <Icon name='check-circle' size={22} color="#2089dc" />
                    }
                    titleStyle={styles.buttonTitle}
                    onPress={handleFormSignup}
                />
            </View>
        </View>
    )
}

export default SignupForm;