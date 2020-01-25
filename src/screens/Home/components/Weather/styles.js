import { StyleSheet } from 'react-native';
import Colors from '../../../../standards/colors';
import Fonts from '../../../../standards/fonts';

const styles = StyleSheet.create({
    weatherCard: {
        flex: 1,
        borderColor: Colors.white,
        borderWidth: 1,
        borderRadius: 16,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
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
        borderBottomColor: Colors.divider,
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
        fontSize: Fonts.text,
        marginLeft: 4,
        alignItems: 'center',
    },
    currentWeatherDescriptionContainer: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    currentWeatherDescription: {
        fontSize: Fonts.subtext,
        color: Colors.fadedText,
    },
    currentWeatherValueContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    currentWeatherValue: {
        fontSize: Fonts.title,
        color: Colors.dark,
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
        fontSize: Fonts.text,
        fontWeight: 'bold',
        marginTop: 4,
        color: Colors.dark,
    },
    forecastWeatherDay: {
        fontSize: Fonts.subtext,
        color: Colors.fadedText,
        marginTop: 2,
    }
});

export default styles;