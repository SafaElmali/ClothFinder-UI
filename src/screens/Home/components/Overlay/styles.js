import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    overlayView: {
        borderBottomWidth: 1,
        borderBottomColor: '#bcbbc1'
    },
    overlayTitle: {
        alignSelf: 'center',
        marginVertical: 20
    },
    overlayCloseButton: {
        position: 'absolute',
        right: 0,
        color: '#0687f5'
    }
});

export default styles;