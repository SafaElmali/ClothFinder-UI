import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	headerContainer: {
		marginTop: 16,
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	descriptionContainer: {
		marginTop: 16,
	},
	description: {
		fontSize: 12,
		paddingLeft: 32,
		paddingRight: 32,
		color: '#828994',
		textAlign: 'center',
		lineHeight: 16,
	},
	button: {
		marginTop: 48,
		paddingTop: 16,
		paddingBottom: 16,
		paddingLeft: 48,
		paddingRight: 48,
        backgroundColor: '#F37335', borderRadius: 64, marginVertical: 10, shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 2,
	}
});

export default styles;