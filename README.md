React Native in-app platform-specific notifications. 

<img src="" width="40" height="40" />

- The package uses react-native-blur and gesture-handler to implement native-like appearance
- Compatible with iPhone X, XR, XS, XS Max.
- Allows you to use your own components.

## Installation

- Run `npm install react-native-in-app-message`
- Run `npm install react-native-gesture-handler` and follow the <a href="https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html#installation">linking guide</a>
- Run `npm install react-native-blur` and follow the <a href="https://github.com/react-native-community/react-native-blur#installation">linking guide</a>

## Usage

```
import {Notification} from "react-native-in-app-message";

...

render() {
    return (
      <View>
        <AppNavigator screenProps={{showNotification: this.showMessage}} />
        <Notification 
            text={'Hello world'}
            onPress={this.hideMessage} 
            ref={node => this.notification = node} 
            textColor={'#000'} />
      </View>
    )
  }

```

## 
