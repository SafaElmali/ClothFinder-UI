import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonView: {
        alignItems: 'center',
    },
    buttonStyle: {
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#615D5D',
        borderWidth: 1,
        margin: 20,
        borderStyle: 'solid'
    },
    buttonText: {
        textTransform: 'capitalize',
        marginVertical: -15,
        color: '#615D5D'
    }
});

export default styles;