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
    storyButtonView: {
        flexDirection: 'row'
    },
    ratingView: {
        flex: 1,
        borderBottomColor: '#000',
        borderWidth: 1,
    },
    weatherView: {
        flex: 0.4
    }
});

export default styles;