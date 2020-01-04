import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    weatherView: {
        flex: 6,
        backgroundColor: 'yellow'
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
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    weatherContainerCard: {
        borderRadius: 4,
        borderColor: 'white',
        padding: 16,
        flex: 1,
        flexDirection: 'row',
    },
    currentWeather: {
        flex: 1,
        backgroundColor: 'red'
    },
    forecastWeather: {
        flex: 0.5,
        backgroundColor: 'yellow'
    },
});

export default styles;