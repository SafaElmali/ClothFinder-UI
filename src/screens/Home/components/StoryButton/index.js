import React from 'react';
import { Button, Text } from 'react-native-elements';
import { View } from 'react-native';
import { garmentTypeLocalPoint } from '../../../../utils/config/config';
import styles from './styles';
import axios from 'axios';

const StoryButton = props => {
    const { jwt, garmentType, onHandleGarmentList, image, wearList } = props;

    const handleGarment = () => {
        if (wearList === undefined) {
            axios.get(garmentTypeLocalPoint + `${garmentType}`, {
                headers: {
                    Authorization: 'Bearer ' + jwt //the token is a variable which holds the token
                }
            }).then(({ status, data }) => {
                if (status === 200) {
                    onHandleGarmentList(data, garmentType);
                }
            });
        } else {
            onHandleGarmentList(wearList, garmentType);
        }
    }

    var getStoryName = (garmentType) => {
        if (garmentType === 'TOPWEAR') {
            return 'Top';
        } else if (garmentType === 'BOTTOMWEAR') {
            return 'Bottom';
        } else if (garmentType === 'FOOTWEAR') {
            return 'Footwear';
        } else if (garmentType === 'ACCESSORIES') {
            return 'Accessories';
        } else {
            return 'Comollocco';
        }
    }

    return (
        <View style={styles.buttonView} >
            <Button
                icon={image}
                buttonStyle={styles.buttonStyle}
                onPress={handleGarment}
            />
        </View>
    )
}

export default StoryButton;