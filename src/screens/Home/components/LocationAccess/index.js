import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const AccessCard = (props) => {

    const getLocationPermission = () => {
        const { onClick } = props;
        onClick();
    }

    return (
        <View style={{ alignItems: 'center', }}>
            <View style={styles.headerContainer}><Text style={styles.header}>Location Services</Text></View>
            <View style={styles.descriptionContainer}><Text style={styles.description}>We need to know where you are in order to display weather details</Text></View>
            <Button
                icon={
                    <Icon
                        name="lock"
                        size={20}
                        color="white"
                    />
                }
                title="Enable Location Service"
                buttonStyle={styles.button}
                titleStyle={{ paddingLeft: 10 }}
                onPress={getLocationPermission}
            />
        </View>
    )
}

export default AccessCard;