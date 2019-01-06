import React, {ReactNode} from 'react';
import {Animated, Text} from "react-native";
import {PanGestureHandlerGestureEvent} from "react-native-gesture-handler";
import {IOStyle} from "./iOStyle";
import {Props} from './Props';

export class NotificationBase extends React.Component<Props, {}>{

  protected translateY: Animated.Value = new Animated.Value(-300);
  protected offset: number = 22;
  protected viewHeight: number = 0;
  protected timer!: number;

  public showNotification = (): void => {
    clearTimeout(this.timer);
    const {autohide, duration} = this.props;
    Animated.spring(this.translateY, {
      toValue: 0,
      useNativeDriver: true
    }).start(() => {
      if (autohide) {
        this.timer = setTimeout(this.hideNotification, duration);
      }
    });
  };

  public hideNotification = (): void => {
    Animated.spring(this.translateY, {
      toValue: (this.viewHeight + this.offset) * -1,
      useNativeDriver: true
    }).start();
  };

  protected onGestureEvent = (event: PanGestureHandlerGestureEvent): void => {
    if (event.nativeEvent.translationY > 0) {
      this.translateY.setValue(event.nativeEvent.translationY / 10);
    } else if (event.nativeEvent.translationY < 0) {
      this.translateY.setValue(event.nativeEvent.translationY);
    }
  };

  protected onHandlerStateChange = (event: PanGestureHandlerGestureEvent): void => {
    if (event.nativeEvent.translationY > ((this.viewHeight / 2) * -1)) {
      this.showNotification();
    } else {
      this.hideNotification();
    }
  };

  protected handleOnLayout = (event: any): void => {
    this.viewHeight = event.nativeEvent.layout.height;
  };

  protected renderCustomComponent(): ReactNode {
    return this.props.customComponent;
  }

  protected renderOwnComponent(): ReactNode {
    const {textColor, text} = this.props;
    return <Text style={[IOStyle.text, {color: textColor}]}>{text}</Text>;
  }
}
