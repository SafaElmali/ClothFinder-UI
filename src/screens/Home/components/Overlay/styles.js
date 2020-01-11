import { StyleSheet } from 'react-native';

export const Colors = {
    black: '#000',
    white: '#fff',
    dark: '#090D14',
    light: '#FEFEFE',
    divider: '#EFEFEF',
    darkText: '#4F4B52',
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