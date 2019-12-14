
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#d3d3d3',
        padding: Platform.OS === 'ios' ? 5 : 0,
        marginTop: 20,
    },
    inputContainer: {
        borderWidth: 0,
        borderBottomColor: 'transparent',
    },
    inputBorder: {
        borderWidth: 1,
    },
    inputText: {
        marginLeft: 10,
        color: '#d3d3d3'
    },
    placeholder: {
        color: 'lightgray'
    },
    label: {
        position: 'absolute',
        top: -12,
        left: 20,
        color: '#ffd369',
        backgroundColor: '#222831'
    },
    button: {
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#2089dc'
    },
    buttonTitle: {
        paddingRight: 10
    }
});

export default styles;