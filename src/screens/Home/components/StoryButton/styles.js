import { StyleSheet } from 'react-native';

export const Colors = {
    black: '#000',
    white: '#fff',
    dark: '#090D14',
    light: '#FEFEFE',
    divider: '#EFEFEF',
    fadedText: '#898a89',
    fadedLight: '#FAFAFA',
    background: '#F8F8F8',
    primary: '#F8530D'
};

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