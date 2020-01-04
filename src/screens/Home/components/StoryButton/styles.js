import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonView: {
        alignItems: 'center',
    },
    buttonStyle: {
        borderRadius: 50,
        width: 72,
        height: 72,
        backgroundColor: '#000',
        borderColor: '#615D5D',
        borderWidth: 2,
        borderStyle: 'solid'
    },
    buttonText: {
        textTransform: 'capitalize',
        marginTop: 8,
        color: '#615D5D'
    }
});

export default styles;