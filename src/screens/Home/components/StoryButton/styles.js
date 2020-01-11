import { StyleSheet } from 'react-native';
import Colors from '../../../../standards/colors';

export const Fonts = {
    title: 32,
    subtitle: 24,
    header: 18,
    text: 14,
    subtext: 12,
    hint: 10,
};

const styles = StyleSheet.create({
    buttonView: {
        alignItems: 'center',
        marginTop: 10
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