import React, {ReactNode} from 'react';
import {Animated, Text, Easing} from "react-native";
import {PanGestureHandlerGestureEvent} from "react-native-gesture-handler";
import {IOStyle} from "./iOStyle";
import {Props} from './Props';

export class NotificationBase extends React.Component<Props, {}> {

  static show: Function;
  static hide: Function;

  constructor(props: Props) {
    super(props);

    NotificationBase.show = () => {
      try {
        this.show();
      } catch (e) {}
    };
    NotificationBase.hide = () => {
      try {
        this.hide();
      } catch (e) {}
    }
  }

  protected translateY: Animated.Value = new Animated.Value(-9000);
  protected offset: number = 22;
  protected viewHeight: number = 0;
  protected timer!: number;

  public show = (): void => {
    clearTimeout(this.timer);
    Animated.timing(this.translateY, {
      toValue: 0,
      useNativeDriver: true,
      duration: 400,
      easing: Easing.bezier(.0, .74, .27, 1.19)
    }).start(() => this.props.autohide && (this.timer = setTimeout(this.hide, this.props.duration)));
  };

  public hide = (): void => {
    Animated.timing(this.translateY, {
      toValue: (this.viewHeight + this.offset) * -1,
      useNativeDriver: true,
      duration: 400,
      easing: Easing.bezier(.53, .67, .19, 1.1)
    }).start();
  };

  protected onGestureEvent = (event: PanGestureHandlerGestureEvent): void => {
    const {translationY} = event.nativeEvent;
    this.translateY.setValue(translationY > 0 ? translationY / 10 : translationY);
  };

  protected onHandlerStateChange = (event: PanGestureHandlerGestureEvent): void => {
    const {velocityY, translationY} = event.nativeEvent
    if (velocityY < -400) {
      Animated.timing(this.translateY, {
        duration: 600,
        toValue: (this.viewHeight + this.offset) * -1,
        useNativeDriver: true,
        easing: Easing.bezier(.15, 0.9, .15, 1.1)
      }).start();
      return;
    }
    if ((translationY > ((this.viewHeight / 2) * -1)) || (velocityY > -400)) {
      this.show();
    } else {
      this.hide();
    }
  };

  protected handleOnLayout = (event: any): void => {
    this.viewHeight = event.nativeEvent.layout.height;
    Animated.timing(this.translateY, {
      duration: 0,
      toValue: (event.nativeEvent.layout.height + this.offset) * -1,
      useNativeDriver: true
    }).start();
  };

  protected renderCustomComponent(): ReactNode {
    return this.props.customComponent;
  }

  protected renderOwnComponent(): ReactNode {
    const {textColor, text} = this.props;
    return <Text style={[IOStyle.text, {color: textColor}]}>{text}</Text>;
  }
}
