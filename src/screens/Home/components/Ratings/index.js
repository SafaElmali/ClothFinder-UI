import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { WorstEmoji, BestEmoji, BadEmoji, NeutralEmoji, GoodEmoji } from '../../../../components/SvgFiles/index';
import Swiper from 'react-native-swiper'
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
        <>
            <Swiper showsButtons={true} showsPagination={false}>
                <View style={styles.ratingCard}>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>How do you feel with selected SelectedItem ({1}/{2})?</Text>
                    </View>
                    <View style={styles.selectionContainer}>
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonCenterView}>
                                <WorstEmoji />
                                <Text style={styles.buttonText}>WORST</Text>
                            </View>
                            <View style={styles.buttonCenterView}>
                                <BadEmoji />
                                <Text style={styles.buttonText}>BAD</Text>
                            </View>
                            <View style={styles.buttonCenterView}>
                                <NeutralEmoji />
                                <Text style={styles.buttonText}>NEUTRAL</Text>
                            </View>
                            <View style={styles.buttonCenterView}>
                                <GoodEmoji />
                                <Text style={styles.buttonText}>GOOD</Text>
                            </View>
                            <View style={styles.buttonCenterView}>
                                <BestEmoji />
                                <Text style={styles.buttonText}>BEST</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.ratingCard}>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>How do you feel with selected SelectedItem ({1}/{2})?</Text>
                    </View>
                    <View style={styles.selectionContainer}>
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonCenterView}>
                                <WorstEmoji />
                                <Text style={styles.buttonText}>WORST</Text>
                            </View>
                            <View style={styles.buttonCenterView}>
                                <BadEmoji />
                                <Text style={styles.buttonText}>BAD</Text>
                            </View>
                            <View style={styles.buttonCenterView}>
                                <NeutralEmoji />
                                <Text style={styles.buttonText}>NEUTRAL</Text>
                            </View>
                            <View style={styles.buttonCenterView}>
                                <GoodEmoji />
                                <Text style={styles.buttonText}>GOOD</Text>
                            </View>
                            <View style={styles.buttonCenterView}>
                                <BestEmoji />
                                <Text style={styles.buttonText}>BEST</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Swiper>
        </>
    )
}

export default Rating;