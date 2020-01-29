import { StyleSheet } from 'react-native';
import Fonts from '../../../../standards/fonts';
import Colors from '../../../../standards/colors';

const styles = StyleSheet.create({
    dataNotFoundContainer: {
        flex: 1,
        paddingVertical: 64,
        paddingHorizontal: 32,
        alignItems: 'center',
    },
    dataNotFoundText: {
        textAlign: 'center',
        fontSize: Fonts.subheader,
        color: Colors.fadedText,
        marginTop: 32,
    },
});

export default styles;