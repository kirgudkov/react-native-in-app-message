React Native in-app notifications. 


<img src="https://user-images.githubusercontent.com/17552441/50742070-67691b00-1217-11e9-94b3-c569c9a8aa9a.gif" width="200" height="200" /><img src="https://user-images.githubusercontent.com/17552441/50742065-5ae4c280-1217-11e9-9b8e-0121a09d8be1.gif" width="200" height="200" /><img src="https://user-images.githubusercontent.com/17552441/50742058-47d1f280-1217-11e9-8554-51d02d5661e3.gif" width="200" height="200" /><img src="https://user-images.githubusercontent.com/17552441/50741960-c9288580-1215-11e9-8a4f-d2baa8778329.gif" width="200" height="200" /><img src="https://user-images.githubusercontent.com/17552441/50844169-399ce700-137b-11e9-96f6-a72eb483986f.gif" alt="onDragEvent example" width="200" height="200" /><img alt="force touch example" src="https://user-images.githubusercontent.com/17552441/50844280-7b2d9200-137b-11e9-8477-bc0fc120edda.gif" width="200" height="200" />


- Compatible with iPhone X, XR, XS, XS Max.
- Allows you to use your own components.
- Swipeable
- Force Touch support
- Taptic Engine feedback support
- `onDrag` gesture event support

## Installation

- Run `npm install react-native-in-app-message`
- Run `react-native link react-native-in-app-message` - required for iOS
- Run `npm install react-native-gesture-handler` and follow the <a href="https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html#installation">linking guide</a>. Required for both platforms

## Usage

```javascript
import {Notification} from "react-native-in-app-message";

...
this.ref.current?.show();
...

//It's important to declare Notification component next to root component
//otherwise component will be shown inside the navigator
render() {
    return (
      <React.Fragment>
        <AppNavigator/>
        <Notification text={'Hello world'} ref={this.ref} />
      </React.Fragment>
    )
  }
```

There is an [example](https://github.com/KirillGudkov/in-app-message-example) of usage

## Methods
- `show()`
- `hide()`

## Props

- `blurType` - must be one of `'xlight' | 'light' | 'dark'`. iOS Only
- `blurAmount` - `number`. iOS Only
- `tapticFeedback` - `boolean`. iOS 10 and upper
- `showKnob` - `boolean`. iOS Only
- `duration` - `number`
- `autohide` - `boolean`
- `hideStatusBar` - `boolean`
- `text` - `string`. The text for the message. Required if `customComponent` is not used.
- `textColor` - `string`.
- `customComponent` - `ReactNode`.
- `onPress` - `() => void`.
- `onDragGestureEvent` - `(event: PanGestureHandlerGestureEvent) => void`.
- `onDragGestureHandlerStateChange` - `(event: PanGestureHandlerGestureEvent) => void`.
- `onForceTouchGestureEvent` - `(event: ForceTouchGestureHandlerGestureEvent) => void`. iOS Only and iPhone 6s and upper
- `onForceTouchHandlerStateChange` - `(event: ForceTouchGestureHandlerStateChangeEvent) => void`.  iOS Only and iPhone 6s and upper
- `useForceTouch` - `boolean`. iOS Only and iPhone 6s and upper (default - `false`)

## Modules
- Notification `import {Notification} from "react-native-in-app-message";`
- Blur `import {Blur} from "react-native-in-app-message";`
- TapticFeedback `import {TapticFeedback} from "react-native-in-app-message";`   
  >Usage:  `TapticFeedback.impact();`
