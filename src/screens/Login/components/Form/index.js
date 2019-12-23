import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const LoginForm = (props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [displayPassword, setPasswordShow] = useState(false);

    const onPasswordDisplay = () => {
        setPasswordShow(!displayPassword);
    }

    const handleLogin = () => {
        const { onLogin } = props;
        onLogin(name, password, true);
    }

    return (
        <View>
            <Input
                label="Username"
                leftIcon={
                    <Icon name='user' size={18} color="#6c706d" />
                }
                onChangeText={name => setName(name)}
                value={name}
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
                    title="Login"
                    type="clear"
                    containerStyle={styles.button}
                    iconRight
                    icon={
                        <Icon size={22} color="#2089dc" />
                    }
                    titleStyle={styles.buttonTitle}
                    onPress={handleLogin}
                />
            </View>
        </View>
    )
}

export default LoginForm;