import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaebef',
    },
    storyView: {
        flex: 4,
        flexDirection: 'column',
    },
    ratingView: {
        flex: 6,
        borderBottomColor: '#000',
        borderWidth: 1,
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
    forecastWeather: {
        backgroundColor: 'yellow'
    },
    weatherContainer: {
        flex: 6,
        paddingTop: 16,
        paddingRight: 24,
        paddingBottom: 16,
        paddingLeft: 24,
    },
    weatherCard: {
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
    weatherContent: {
        flex: 1,
    },
    currentWeather: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#efefef'
    },
    forecastWeather: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    currentWeatherIconContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    currentWeatherInfoContainer: {
        flex: 4,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    currentWeatherLocationContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    currentWeatherLocation: {
        fontSize: 14,
        marginLeft: 4,
        alignItems: 'center',
    },
    currentWeatherDescriptionContainer: {
        flex: 3,
        justifyContent: 'flex-start',
    },
    currentWeatherDescription: {
        fontSize: 12,
        color: '#bebebf',
        backgroundColor: 'yellow'
    },
    currentWeatherValueContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    currentWeatherValue: {
        fontSize: 32,
    },
    forecastWeatherGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    forecastWeatherItem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    forecastWeatherValue: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 4,
    },
    forecastWeatherDay: {
        fontSize: 12,
        color: '#9f9f9f',
        marginTop: 2,
    }
});

export default styles;