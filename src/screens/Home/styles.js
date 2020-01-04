import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaebef',
    },
    weatherView: {
        flex: 6,
        paddingTop: 16,
        paddingRight: 24,
        paddingBottom: 16,
        paddingLeft: 24,
        backgroundColor: 'red'
    },
    storyView: {
        flex: 4,
        flexDirection: 'column',
        backgroundColor: 'green'
    },
    ratingView: {
        flex: 6,
        borderBottomColor: '#000',
        borderWidth: 1,
        backgroundColor: 'blue'
    },
    submitView: {
        flex: 2,
        backgroundColor: 'gray',
    },
    storyViewContainer: {
        flex: 1,
    },
    storyButtonView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    weatherCard: {
        flex: 1,
        margin: 0,
        backgroundColor: 'purple',
        borderRadius: 16,
    },
    weatherCardContent: {
        flexDirection: 'column',
    },
    currentWeather: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'red'
    },
    forecastWeather: {
        backgroundColor: 'yellow'
    },
    a: {
        flex: 6,
        paddingTop: 16,
        paddingRight: 24,
        paddingBottom: 16,
        paddingLeft: 24, 
    },
    b: {
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
    c: {
        flex: 1,
    },
    d: {
        flex: 3,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    e: {
        flex: 2,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    f: {
        flex: 1.5,
        backgroundColor: 'gray'
    },
    g: {
        flex: 2,
        backgroundColor: 'blue'
    },
    h: {
        flex: 3,
        backgroundColor: 'orange'
    },
    j: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

export default styles;