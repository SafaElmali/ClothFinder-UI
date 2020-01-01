import React from 'react';
import { Button, Text } from 'react-native-elements';
import { View, Image } from 'react-native';
import { garmentTypeLocalPoint } from '../../../../utils/config/config';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const StoryButton = props => {
    const { jwt, garmentType, handleGarmentList, imagePath } = props;

    const handleGarment = () => {
        axios.get(garmentTypeLocalPoint + `${garmentType}`, {
            headers: {
                Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
            }
        }).then(({ status, data }) => {
            if (status === 200) {
                handleGarmentList(data);
            }
        });
    }

    return (
        <View style={styles.buttonView} >
            <Button
                icon={
                    <Image
                        style={{ width: 35, height: 35 }}
                        source={imagePath} />
                }
                buttonStyle={styles.buttonStyle}
                onPress={handleGarment}
            />
            <Text style={styles.buttonText}>{garmentType}</Text>
        </View >
    )
}

export default StoryButton;