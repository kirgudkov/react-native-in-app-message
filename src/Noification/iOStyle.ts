import {StyleSheet} from "react-native";

export const IOStyle = StyleSheet.create({
  mainStyle: {
    alignSelf: 'center',
    position: 'absolute',
    top: 22,
  },
  innerContainer: {
    width: '100%'
  },
  notification: {
    width: '95%',
    zIndex: 2,
    elevation: 2,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
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
