import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    storyView: {
        flex: 0.4,
        flexDirection: 'column'
    },
    storyViewContainer: {
        flex: 1,
    },
    storyButtonView: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    ratingView: {
        flex: 1,
        borderBottomColor: '#000',
        borderWidth: 1,
    },
    weatherView: {
        flex: 0.4
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