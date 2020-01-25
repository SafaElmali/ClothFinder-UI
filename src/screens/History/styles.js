import { StyleSheet, Platform } from 'react-native';
import Colors from '../../standards/colors';
import Fonts from '../../standards/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    scrollContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    cardItem: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: Colors.white,
        borderWidth: 1,
        borderRadius: 2,
        padding: 16,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 8,
        marginTop: 24,
    },
    dateBadge: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -8,
        left: 0,
        right: 0,
    },
    date: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        color: Colors.light,
        backgroundColor: '#4E6671',
        borderColor: '#4E6671',
        borderWidth: 1,
        borderRadius: 8,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        padding: 16,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 4,
    },
    weatherContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    weather: {
        fontSize: Fonts.title,
        color: Colors.dark,
    },
    description: {
        fontSize: Fonts.header,
        color: Colors.darkText,
    },
    locationContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 4,
    },
    location: {
        fontSize: Fonts.text,
        color: Colors.darkText,
        marginLeft: 4,
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    }
});

export default styles;