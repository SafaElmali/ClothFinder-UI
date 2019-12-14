import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222831'
    },
    header: {
        flex: Platform.OS === 'android' ? 0.4 : 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContent: {
        flex: Platform.OS === 'android' ? 0.6 : 1,
        paddingHorizontal: 20,
    },
    footer: {
        flex: Platform.OS === 'android' ? 0.2 : 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;