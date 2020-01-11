import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
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
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    currentWeatherLocation: {
        fontSize: 14,
        marginLeft: 4,
        alignItems: 'center',
    },
    currentWeatherDescriptionContainer: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    currentWeatherDescription: {
        fontSize: 12,
        color: '#aaaaaa',
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
        color: '#aaaaaa',
        marginTop: 2,
    }
});

export default styles;