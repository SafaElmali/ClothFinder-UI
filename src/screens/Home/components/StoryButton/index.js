import React from 'react';
import { Button, Text } from 'react-native-elements';
import { View } from 'react-native';
import { garmentTypeLocalPoint } from '../../../../utils/config/config';
import styles from './styles';
import axios from 'axios';

const StoryButton = props => {
    const { jwt, garmentType, handleGarmentList, image, wearList } = props;

    const handleGarment = () => {
        if (wearList === undefined) {
            axios.get(garmentTypeLocalPoint + `${garmentType}`, {
                headers: {
                    Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
                }
            }).then(({ status, data }) => {
                if (status === 200) {
                    handleGarmentList(data, garmentType);
                }
            });
        } else {
            handleGarmentList(wearList, garmentType);
        }
    }

    return (
        <View style={styles.buttonView} >
            <Button
                icon={
                    image
                }
                buttonStyle={styles.buttonStyle}
                onPress={handleGarment}
            />
            <Text style={styles.buttonText}>{garmentType}</Text>
        </View>
    )
}

export default StoryButton;