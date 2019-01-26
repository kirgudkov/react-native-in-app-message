import { StyleSheet } from "react-native";

export const IOStyle = StyleSheet.create({
	mainStyle: {
		alignSelf: 'center',
		position: 'absolute',
	},
	innerContainer: {
		width: '100%'
	},
	notification: {
		width: '96.5%',
		zIndex: 2,
		elevation: 2,
		backgroundColor: 'transparent',
		alignItems: 'center',
		justifyContent: 'center',
		shadowOpacity: 0.1,
		shadowRadius: 4,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		borderRadius: 14,
	},
	container: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 16,
		marginTop: 16,
		marginBottom: 6,
		marginHorizontal: 10
	},
	knob: {
		width: 50,
		height: 4,
		backgroundColor: '#ffffff',
		opacity: 0.3,
		borderRadius: 4,
		marginVertical: 6,
	},
	absolute: {
		position: "absolute",
		width: '100%',
		height: '100%',
		borderRadius: 14,
	},
	content: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
