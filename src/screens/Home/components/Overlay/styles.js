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
        color: '#006699',
        marginVertical: 16,
    },
    overlayCloseButton: {
        position: 'absolute',
        marginTop: 16,
        paddingHorizontal: 16,
        right: 0,
        color: Colors.primary
    },
    listItem: {
        color: Colors.darkText,
        fontSize: Fonts.text,
        fontWeight: '300',
    }
});

export default styles;