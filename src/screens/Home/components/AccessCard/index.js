import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const AccessCard = (props) => {

    const getLocationPermission = () => {
        const { onClick } = props;
        onClick();
    }

    return (
        <View style={{ alignItems: 'center', }}>
            <Text h4>Location Services</Text>
            <View>
                <Text>We need to know where you are in order to display weather details</Text>
            </View>
            <Button
                icon={
                    <Icon
                        name="lock"
                        size={20}
                        color="white"
                    />
                }
                title="Enable location Services"
                buttonStyle={{
                    backgroundColor: '#F37335', borderRadius: 12, marginVertical: 10, shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 1,
                    shadowRadius: 1,
                    elevation: 4,
                }}
                titleStyle={{ paddingLeft: 10 }}
                onPress={getLocationPermission}
            />
        </View>
    )
}

export default AccessCard;