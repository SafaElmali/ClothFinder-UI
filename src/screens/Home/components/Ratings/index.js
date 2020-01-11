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
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>How do you feel with selected SelectedItem ({1}/{2})?</Text>
            </View>
            <View style={styles.selectionContainer}>
                <View style={styles.arrowContainer}>
                    <Icon name='chevron-left' size={30} onPress={() => console.log(arr)} />
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={{ alignItems: 'center' }}>
                        <WorstEmoji />
                        <Text style={styles.buttonText}>WORST</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <BadEmoji />
                        <Text style={styles.buttonText}>BAD</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <NeutralEmoji />
                        <Text style={styles.buttonText}>NEUTRAL</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <GoodEmoji />
                        <Text style={styles.buttonText}>GOOD</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <BestEmoji />
                        <Text style={styles.buttonText}>BEST</Text>
                    </View>
                    <View style={styles.arrowContainer}>
                        <Icon name='chevron-right' size={30} onPress={() => console.log(arr)} />
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