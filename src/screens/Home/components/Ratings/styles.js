import { StyleSheet } from 'react-native';
import Colors from '../../../../standards/colors';
import Fonts from '../../../../standards/fonts';

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
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: { width: 16, height: 16 },
        shadowOpacity: 1,
        shadowRadius: 16,
        elevation: 4,
        marginVertical: 8,
        marginHorizontal: 8,
    },
    disabledCardContainer: {
        flex: 1,
        paddingRight: 16,
        paddingLeft: 16,
    },
    ratingContent: {
        flex: 1,
    },
    questionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    questionText: {
        fontSize: Fonts.header,
        fontWeight: '600',
        color: Colors.dark,
        textAlign: 'center'
    },
    selectionContainer: {
        flex: 1,
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
    },
    buttonText: {
        fontSize: Fonts.hint,
    },
    buttonCenterView: {
        alignItems: 'center'
    },
    disableRatingCard: {
        flex: 1,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 16,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        marginBottom: 10,
        paddingLeft: 16,
        backgroundColor: 'white',
        shadowColor: Colors.lightGray,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        opacity: 0.7,
        elevation: 4,
    },
});

export default styles;