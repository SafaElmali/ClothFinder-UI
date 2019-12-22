import React from 'react';
import { Dimensions, View, Text, StyleSheet } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);

export const Toaster = (props) => {
    const { text, type } = props;

    switch (type) {
        case 'Warning':
            return (
                <View style={styles(props).toasterView}>
                    <Text style={styles(props).toasterText}>{text}</Text>
                </View>
            );
            break;
        case 'Success':
            return (
                <View style={styles(props).toasterView}>
                    <Text style={styles(props).toasterText}>{text}</Text>
                </View>
            );
    }
}

const styles = props => StyleSheet.create({
    toasterView: {
        position: 'absolute',
        backgroundColor: props.type === 'Warning' ? '#f1c40f' : props.type === 'Success' ? '#07bc0c' : '#e74c3c',
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