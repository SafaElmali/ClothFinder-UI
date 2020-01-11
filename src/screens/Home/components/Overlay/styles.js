import { StyleSheet } from 'react-native';
import Colors from '../../../../standards/colors';
import Fonts from '../../../../standards/fonts';

const styles = StyleSheet.create({
    overlayView: {
    },
    overlayTitle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: Fonts.header,
        color: Colors.dark,
        marginVertical: 16,
    },
    overlayCloseButton: {
        position: 'absolute',
        marginTop: 16,
        paddingHorizontal: 16,
        right: 0,
        color: '#0687f5'
    },
    listItem: {
        color: Colors.darkText,
        fontSize: Fonts.text,
        fontWeight: '300',
    }
});

export default styles;