import {StyleSheet} from "react-native";

export const androidStyle = StyleSheet.create({
  notification: {
    width: '96%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    top: 0,
    elevation: 6,
    zIndex: 2,
    position: 'absolute',
    alignSelf: 'center'
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginVertical: 16,
  },
  content: {
    width: '98%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
