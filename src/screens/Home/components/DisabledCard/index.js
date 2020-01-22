import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements'
import { WorstEmoji, BestEmoji, BadEmoji, NeutralEmoji, GoodEmoji } from '../../../../components/SvgFiles/index';
import styles from './styles';

const DisabledCard = () => {
    return (
        <View style={styles.disableRatingCard}>
            <View style={styles.questionContainer}>
                <Text style={[styles.questionText, styles.disabledText]}>You should make at least one selection to rate your wear</Text>
            </View>
            <View style={styles.selectionContainer}>
                <View style={styles.buttonsContainer}>
                    <View style={[styles.buttonCenterView, styles.disableView]}>
                        <WorstEmoji />
                        <Text style={styles.buttonText}>WORST</Text>
                    </View>
                    <View style={[styles.buttonCenterView, styles.disableView]}>
                        <BadEmoji />
                        <Text style={styles.buttonText}>BAD</Text>
                    </View>
                    <View style={[styles.buttonCenterView, styles.disableView]}>
                        <NeutralEmoji />
                        <Text style={styles.buttonText}>NEUTRAL</Text>
                    </View>
                    <View style={[styles.buttonCenterView, styles.disableView]}>
                        <GoodEmoji />
                        <Text style={styles.buttonText}>GOOD</Text>
                    </View>
                    <View style={[styles.buttonCenterView, styles.disableView]}>
                        <BestEmoji />
                        <Text style={styles.buttonText}>BEST</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DisabledCard;