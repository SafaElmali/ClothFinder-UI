import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { WorstEmoji, BestEmoji, BadEmoji, NeutralEmoji, GoodEmoji } from '../../../../components/SvgFiles/index';
import DisabledCard from '../RatingsDisabled/index';
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
            let bottomwearList = arr[1];
            let selectedGarmentItem = bottomwearList.findIndex((garmentItem => garmentItem.garment.id == item.garment.id));
            bottomwearList[selectedGarmentItem].rating = rateType;
            handleSelectedRate();
        } else if (garmentType === 'FOOTWEAR') {
            let footwearList = arr[2];
            let selectedGarmentItem = footwearList.findIndex((garmentItem => garmentItem.garment.id == item.garment.id));
            footwearList[selectedGarmentItem].rating = rateType;
            handleSelectedRate();
        } else if (garmentType === 'ACCESSORIES') {
            let accessoriesList = arr[3];
            let selectedGarmentItem = accessoriesList.findIndex((garmentItem => garmentItem.garment.id == item.garment.id));
            accessoriesList[selectedGarmentItem].rating = rateType;
            handleSelectedRate();
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
                                            <BadEmoji onPress={() => assignRate(garmentItem, 'BAD', garmentItem.garment.garmentType)} />
                                            <Text style={styles.buttonText}>BAD</Text>
                                        </View>
                                        <View style={styles.buttonCenterView}>
                                            <NeutralEmoji onPress={() => assignRate(garmentItem, 'NEUTRAL', garmentItem.garment.garmentType)} />
                                            <Text style={styles.buttonText}>NEUTRAL</Text>
                                        </View>
                                        <View style={styles.buttonCenterView}>
                                            <GoodEmoji onPress={() => assignRate(garmentItem, 'GOOD', garmentItem.garment.garmentType)} />
                                            <Text style={styles.buttonText}>GOOD</Text>
                                        </View>
                                        <View style={styles.buttonCenterView}>
                                            <BestEmoji onPress={() => assignRate(garmentItem, 'BEST', garmentItem.garment.garmentType)} />
                                            <Text style={styles.buttonText}>BEST</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        }) : null
                    })
                    : <DisabledCard />
                }
            </Swiper>
        </>
    )
}



export default Rating;