import { StyleSheet } from 'react-native';
import Colors from '../../../../standards/colors';
import Fonts from '../../../../standards/fonts';

const styles = StyleSheet.create({
    buttonView: {
        alignItems: 'center',
    },
    buttonStyle: {
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: Colors.white,
        borderColor: Colors.dark,
        borderWidth: 1,
    },
    buttonText: {
        textTransform: 'capitalize',
        marginTop: 8,
        fontWeight: '300',
        fontSize: Fonts.hint,
        color: Colors.dark,
    }
});

export default styles;