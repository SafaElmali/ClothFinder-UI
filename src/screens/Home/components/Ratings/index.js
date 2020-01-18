import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { WorstEmoji, BestEmoji, BadEmoji, NeutralEmoji, GoodEmoji } from '../../../../components/SvgFiles/index';
import Swiper from 'react-native-swiper'
import styles from './styles';

const Rating = props => {
    const { outfit } = props;
    const [arr, setArr] = useState([]);

    useEffect(() => {
        setArr(Object.values(outfit));
    }, [outfit])

    const assignRate = (item, rateType, garmentType) => {
        const { handleSelectedRate } = props;
        if (garmentType === 'TOPWEAR') {
            let topwearList = arr[0];
            let selectedGarmentItem = topwearList.findIndex((garmentItem => garmentItem.garment.id == item.garment.id));
            topwearList[selectedGarmentItem].rating = rateType;
            handleSelectedRate();
        } else if (garmentType === 'BOTTOMWEAR') {
        } else if (garmentType === 'FOOTWEAR') {
        } else if (garmentType === 'ACCESSORIES') {
        } else {
            return 'Comollocco';
        }
    }

    return (
        <>
            <Swiper showsButtons={arr.some(value => value.length > 0)} loop={true} showsPagination={true} horizontal={true}>
                {arr.some(value => value.length > 0) ?
                    arr.map((garmentList) => {
                        return garmentList.length > 0 ? garmentList.map((garmentItem, index) => {
                            return <View key={index} style={styles.ratingCard}>
                                <View style={styles.questionContainer}>
                                    <Text style={styles.questionText}>How do you feel with selected {garmentItem.garment.name} ({index + 1}/{garmentList.length})?</Text>
                                </View>
                                <View style={styles.selectionContainer}>
                                    <View style={styles.buttonsContainer}>
                                        <View style={styles.buttonCenterView}>
                                            <WorstEmoji onPress={() => assignRate(garmentItem, 'WORST', garmentItem.garment.garmentType)} />
                                            <Text style={styles.buttonText}>WORST</Text>
                                        </View>
                                        <View style={styles.buttonCenterView}>
                                            <BadEmoji onPress={() => assignRate(garmentItem, 'BAD')} />
                                            <Text style={styles.buttonText}>BAD</Text>
                                        </View>
                                        <View style={styles.buttonCenterView}>
                                            <NeutralEmoji onPress={() => assignRate(garmentItem, 'NEUTRAL')} />
                                            <Text style={styles.buttonText}>NEUTRAL</Text>
                                        </View>
                                        <View style={styles.buttonCenterView}>
                                            <GoodEmoji onPress={() => assignRate(garmentItem, 'GOOD')} />
                                            <Text style={styles.buttonText}>GOOD</Text>
                                        </View>
                                        <View style={styles.buttonCenterView}>
                                            <BestEmoji onPress={() => assignRate(garmentItem, 'BEST')} />
                                            <Text style={styles.buttonText}>BEST</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        }) : null
                    })
                    : <EmptyCard />
                }
            </Swiper>
        </>
    )
}

const EmptyCard = () => {
    return (
        <View style={styles.emptyRatingCard}>
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>You should make at least one selection to rate your wear</Text>
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
    )
}

export default Rating;