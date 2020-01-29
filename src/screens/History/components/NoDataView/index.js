import React from 'react';
import { View } from 'react-native';
import { Text, Image } from 'react-native-elements';
import styles from './styles';

const NoDataView = () => {
    return (
        <View style={styles.dataNotFoundContainer}>
            <Image
                source={require('../../../../images/sad.png')}
                style={{
                    width: 128,
                    height: 128,
                }}
            />
            <Text style={styles.dataNotFoundText}>
                No available data found. Please choose and rate some outfit in the
                home screen to get your results.
            </Text>
        </View>
    )
}

export default NoDataView;