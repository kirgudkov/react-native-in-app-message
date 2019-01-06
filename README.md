React Native in-app platform-specific notifications. 


<img src="https://user-images.githubusercontent.com/17552441/50742070-67691b00-1217-11e9-94b3-c569c9a8aa9a.gif" width="200" height="200" /><img src="https://user-images.githubusercontent.com/17552441/50742065-5ae4c280-1217-11e9-9b8e-0121a09d8be1.gif" width="200" height="200" /><img src="https://user-images.githubusercontent.com/17552441/50742058-47d1f280-1217-11e9-8554-51d02d5661e3.gif" width="200" height="200" /><img src="https://user-images.githubusercontent.com/17552441/50741960-c9288580-1215-11e9-8a4f-d2baa8778329.gif" width="200" height="200" />


- The package uses react-native-blur and gesture-handler to implement native-like appearance
- Compatible with iPhone X, XR, XS, XS Max.
- Allows you to use your own components.

## Installation

- Run `npm install react-native-in-app-message`
- Run `npm install react-native-gesture-handler` and follow the <a href="https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html#installation">linking guide</a>. Required for both platforms
- Run `npm install react-native-blur` and follow the <a href="https://github.com/react-native-community/react-native-blur#installation">linking guide</a>. Required for iOS

## Usage

```
import {Notification} from "react-native-in-app-message";

...
// Somewhere call
Notification.show();
...

render() {
    return (
      <Fragment>
        <AppNavigator/>
        <Notification text={'Hello world'} onPress={() => Notification.hide()} textColor={'#000'} />
      </Fragment>
    )
  }

```

# Methods
- static `show()`
- static `hide()`

## Props

- `blurType` - must be one of 'xlight' | 'light' | 'dark'. iOS Only
- `blurAmount` - number. iOS Only
- `showKnob` - boolean. iOS Only.
- `duration` - number. Message duration
- `autohide` - boolean.
- `text` - string. The text for the message. Required if `customComponent` is not used.
- `textColor` - string.
- `customComponent` - ReactNode.
- `onPress` - Function
