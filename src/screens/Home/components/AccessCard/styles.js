import { StyleSheet } from 'react-native';
import Colors from '../../../../standards/colors';

const styles = StyleSheet.create({
	headerContainer: {
		marginTop: 16,
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		color: Colors.dark,
	},
	descriptionContainer: {
		marginTop: 16,
	},
	description: {
		fontSize: 12,
		paddingLeft: 32,
		paddingRight: 32,
		color: Colors.fadedText,
		textAlign: 'center',
		lineHeight: 16,
	},
	button: {
		marginTop: 48,
		paddingTop: 16,
		paddingBottom: 16,
		paddingLeft: 48,
		paddingRight: 48,
		backgroundColor: Colors.primary, borderRadius: 64, marginVertical: 10, shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 1,
		shadowRadius: 1,
		elevation: 2,
	}
});

export default styles;