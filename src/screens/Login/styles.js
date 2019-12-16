import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7'
    },
    header: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginFormContent: {
        flex: 0.4,
        paddingHorizontal: 20,
    },
    footer: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;