import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { WorstEmoji, BestEmoji, BadEmoji, NeutralEmoji, GoodEmoji } from '../../../../components/SvgFiles/index';
import DisabledCard from '../DisabledCard/index';
import styles from './styles';

const Rating = props => {
    const { outfit } = props;
    const [arr, setArr] = useState([]);

    useEffect(() => {
        setArr(Object.values(outfit));
    }, [outfit])

    const assignRate = (item, rateType, garmentType) => {
        const { handleSelectedRate } = props;
        const [topwearList, bottomwearList, footwearList, accessoriesList] = arr;
        let selectedGarmentItem = -1;

        if (garmentType === 'TOPWEAR') {
            selectedGarmentItem = topwearList.findIndex((garmentItem => garmentItem.garment.id == item.garment.id));
            topwearList[selectedGarmentItem].rating = rateType;
            handleSelectedRate();
        } else if (garmentType === 'BOTTOMWEAR') {
            selectedGarmentItem = bottomwearList.findIndex((garmentItem => garmentItem.garment.id == item.garment.id));
            bottomwearList[selectedGarmentItem].rating = rateType;
            handleSelectedRate();
        } else if (garmentType === 'FOOTWEAR') {
            selectedGarmentItem = footwearList.findIndex((garmentItem => garmentItem.garment.id == item.garment.id));
            footwearList[selectedGarmentItem].rating = rateType;
            handleSelectedRate();
        } else if (garmentType === 'ACCESSORIES') {
            selectedGarmentItem = accessoriesList.findIndex((garmentItem => garmentItem.garment.id == item.garment.id));
            accessoriesList[selectedGarmentItem].rating = rateType;
            handleSelectedRate();
        } else {
            return 'Comollocco';
        }
    }

    return (
        <>
            <DisabledCard />
        </>
    )
}

export default Rating;