import React from 'react';
import { Dimensions, View, Text, StyleSheet } from "react-native";
import { colors } from 'react-native-elements';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

//TODO Get text and time for display with props
export const WarningToaster = (props) => {
    return (
        <View style={styles.warningToaster}>
            <Text style={styles.toasterText}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    warningToaster: {
        position: 'absolute',
        backgroundColor: '#F1C40F',
        top: 20,
        zIndex: 1,
        height: 50,
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    toasterText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16
    }
});