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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    storyView: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: Colors.light,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 1,
    },
    storyViewScrollContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    storyButtonView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    ratingContainer: {
        flex: 6,
        paddingTop: 24,
        paddingBottom: 12,
        paddingRight: 12,
        paddingLeft: 12,
    },
    weatherContainer: {
        flex: 6,
        paddingTop: 12,
        paddingBottom: 16,
        paddingRight: 12,
        paddingLeft: 12,
    },
    submitView: {
        flex: 2,
        backgroundColor: 'gray',
    },
});

export default styles;