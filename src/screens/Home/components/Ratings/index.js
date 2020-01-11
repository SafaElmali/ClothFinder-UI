import React from 'react';
import { View, Text } from 'react-native';
import { WorstEmoji, BestEmoji, BadEmoji, NeutralEmoji, GoodEmoji } from '../../../../components/SvgFiles/index';

const Rating = props => {
    const { outfit } = props;
    console.log(outfit);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.2, alignItems: 'center', marginVertical: 10 }}>
                <Text> Garment Type</Text>
                <Text>How do you feel with selected SelectedItem ({1}/{2})</Text>
            </View>
            <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ alignItems: 'center' }}>
                    <WorstEmoji />
                    <Text>WORST</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <BadEmoji />
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

            </View>
        </View>
    )
}

export default Rating;