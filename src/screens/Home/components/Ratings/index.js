import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { WorstEmoji, BestEmoji, BadEmoji, NeutralEmoji, GoodEmoji } from '../../../../components/SvgFiles/index';
import { Icon } from 'react-native-elements';
import styles from './styles';

const Rating = props => {
    const { outfit } = props;
    const [arr, setArr] = useState([]);

    console.log(arr);

    useEffect(() => {
        setArr(Object.values(outfit));
    }, [outfit])


    return (
        <View style={styles.ratingCard}>
            <View style={{ flex: 0.2, alignItems: 'center', marginVertical: 10 }}>
                <Text></Text>
                <Text>How do you feel with selected SelectedItem ({1}/{2})</Text>
            </View>
            <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ justifyContent: 'center' }}>
                    <Icon
                        name='chevron-left'
                        size={30}
                        onPress={() => console.log(arr)} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <View style={{ alignItems: 'center' }}>
                        <WorstEmoji />
                        <Text>WORST</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <BadEmoji on />
                        <Text>BAD</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <NeutralEmoji />
                        <Text>NEUTRAL</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <GoodEmoji />
                        <Text>GOOD</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <BestEmoji />
                        <Text>BEST</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Icon
                            name='chevron-right'
                            size={30}
                            onPress={() => console.log(arr)} />
                    </View>
                </View>
            </View>
            <View style={{ flex: 0.2, alignItems: 'center' }}>
                <Text>Selected:</Text>
            </View>
        </View>
    )
}

export default Rating;