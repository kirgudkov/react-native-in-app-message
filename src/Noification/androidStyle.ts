import {StyleSheet} from "react-native";

export const androidStyle = StyleSheet.create({
  notification: {
    width: '100',
    shadowColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    top: 22,
    zIndex: 2,
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderRadius: 12,
    position: 'absolute',
    alignSelf: 'center'
  },
  text: {
    fontSize: 16,
  },
  content: {
    width: '98%',
    flex: 1,
    margin: 14,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -4
  },
});
