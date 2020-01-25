import { StyleSheet } from 'react-native';
import Colors from '../../standards/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    storyView: {
        flex: 2.5,
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
    },
    weatherContainer: {
        flex: 6,
        paddingTop: 12,
        paddingBottom: 16,
        paddingRight: 12,
        paddingLeft: 12,
    },
});

export default styles;