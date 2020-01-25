import { StyleSheet } from 'react-native';
import Colors from '../../standards/colors';
import Fonts from '../../standards/fonts';
import { colors } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    userIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32
    },
    infoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    infoCard: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.white,
        borderWidth: 1,
        borderRadius: 16,
        padding: 32,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 4,
    },
    infoText: {
        alignItems: 'center'
    },
    listContainer: {
        backgroundColor: Colors.white
    },
    itemContainer: {
        flex: 1,
        padding: 16,
        paddingVertical: 24,
    },
    logoutContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    itemDivier: {
        marginHorizontal: 16,
        borderBottomColor: Colors.divider,
        borderBottomWidth: 1,
        marginTop: 8
    },
    header: {
        fontSize: Fonts.subheader,
    },
    menuItem: {
        fontSize: Fonts.text
    },
    menuItemBold: {
        color: Colors.dark
    },
    menuItemFaded: {
        color: Colors.fadedText
    }
});

export default styles;