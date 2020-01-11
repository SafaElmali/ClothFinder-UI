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
    ratingCard: {
        flex: 1,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 16,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 4,
    },
    questionContainer: {
        flex: 0.25,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    questionText: {
        fontSize: Fonts.header,
        fontWeight: '600',
        color: Colors.dark,
        textAlign: 'center',
        marginTop: 16,
    },
    selectionContainer: {
        flex: 0.5, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    arrowContainer: { 
        justifyContent: 'center' 
    },
    buttonsContainer: { 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center'
    },
    buttonStyle: {
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: '#000',
        borderColor: '#615D5D',
        borderWidth: 1,
        margin: 20,
        borderStyle: 'solid'
    },
    buttonText: {
        fontSize: Fonts.hint,
    }
});

export default styles;