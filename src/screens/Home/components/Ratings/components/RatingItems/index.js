import React, { useState } from 'react';
import { Icon } from 'react-native-elements'
import { Text, Button } from 'react-native-elements';
import {
    WorstEmoji,
    BestEmoji,
    BadEmoji,
    NeutralEmoji,
    GoodEmoji,
} from '../../../../../../components/SvgFiles/index';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

const RatingItems = props => {
    const [rateType, setRateType] = useState(false);
    const { item, onAssignRate, isLoading, onHandleSelectedRate } = props;

    const handleSelected = (item, rateType, garmentType) => {
        setRateType(rateType);
        onAssignRate(item, rateType, garmentType);
    }

    return (
        <View style={styles.ratingCard} >
            <View style={styles.ratingContent}>
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>
                        How do you feel with selected {item.garment.name}?
                    </Text>
                </View>
                <View style={styles.selectionContainer}>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonCenterView}>
                            <TouchableOpacity onPress={() => handleSelected(item, 'WORST', item.garment.garmentType)}>
                                <WorstEmoji />
                                {rateType === 'WORST' ?
                                    <Icon
                                        name='check-circle'
                                        color='#A5F989'
                                        containerStyle={{ position: 'absolute', right: -10, top: -15 }} /> : null
                                }
                            </TouchableOpacity>
                            <Text style={styles.buttonText}>WORST</Text>
                        </View>
                        <View style={styles.buttonCenterView}>
                            <TouchableOpacity onPress={() => handleSelected(item, 'BAD', item.garment.garmentType)}>
                                <BadEmoji />
                                {rateType === 'BAD' ?
                                    <Icon
                                        name='check-circle'
                                        color='#A5F989'
                                        containerStyle={{ position: 'absolute', right: -10, top: -15 }} /> : null
                                }
                            </TouchableOpacity>
                            <Text style={styles.buttonText}>BAD</Text>
                        </View>
                        <View style={styles.buttonCenterView}>
                            <TouchableOpacity onPress={() => handleSelected(item, 'NEUTRAL', item.garment.garmentType)}>
                                <NeutralEmoji />
                                {rateType === 'NEUTRAL' ?
                                    <Icon
                                        name='check-circle'
                                        color='#A5F989'
                                        containerStyle={{ position: 'absolute', right: -10, top: -15 }} /> : null
                                }
                            </TouchableOpacity>
                            <Text style={styles.buttonText}>NEUTRAL</Text>
                        </View>
                        <View style={styles.buttonCenterView}>
                            <TouchableOpacity onPress={() => handleSelected(item, 'GOOD', item.garment.garmentType)}>
                                <GoodEmoji />
                                {rateType === 'GOOD' ?
                                    <Icon
                                        name='check-circle'
                                        color='#A5F989'
                                        containerStyle={{ position: 'absolute', right: -10, top: -15 }} /> : null
                                }
                            </TouchableOpacity>
                            <Text style={styles.buttonText}>GOOD</Text>
                        </View>
                        <View style={styles.buttonCenterView}>
                            <TouchableOpacity onPress={() => handleSelected(item, 'BEST', item.garment.garmentType)}>
                                <BestEmoji />
                                {rateType === 'BEST' ?
                                    <Icon
                                        name='check-circle'
                                        color='#A5F989'
                                        containerStyle={{ position: 'absolute', right: -10, top: -15 }} /> : null
                                }
                            </TouchableOpacity>
                            <Text style={styles.buttonText}>BEST</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.submitContainer}>
                    <Button
                        buttonStyle={styles.submitButton}
                        titleStyle={{ textTransform: 'uppercase' }}
                        title="save outfıt"
                        loading={isLoading}
                        onPress={() => onHandleSelectedRate(true)}
                    />
                </View>
            </View>
        </View >
    )
}

export default RatingItems;