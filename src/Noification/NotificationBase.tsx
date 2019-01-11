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
      } catch (e) {
        throw new Error('Unable to show Notification, because there is no instance of Notification');
      }
    };
    NotificationBase.hide = () => {
      try {
        this.hide();
      } catch (e) {
        throw new Error('Unable to hide Notification, because there is no instance of Notification');
      }
    }
  }

  /**
   * onLayout is not invoked immediately, so by default the value is pretty high.
   * Afterwards the value will be changed depending on the @viewHeight value
   */
  protected translateY: Animated.Value = new Animated.Value(-9000);

  /**
   * Default StatusBar offset.
   * .ios component overrides it depending on the type of iPhone
   */
  protected offset: number = 22;

  /**
   * Height of Notification's root view, it changes after onLayout invoking
   */
  protected viewHeight: number = 0;

  private onLayoutHasBeenInvoked = false;

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
    this.translateY.setValue(translationY > 0 ? translationY / 9 : translationY);
    if (this.props.onDragGestureEvent) {
      this.props.onDragGestureEvent(event);
    }
  };

  protected onHandlerStateChange = (event: PanGestureHandlerGestureEvent): void => {
    const {velocityY, translationY} = event.nativeEvent;
    if (this.props.onDragGestureHandlerStateChange) {
      this.props.onDragGestureHandlerStateChange(event);
    }
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
    const {height} = event.nativeEvent.layout;
    this.viewHeight = height;
    if (!this.onLayoutHasBeenInvoked) {
      this.onLayoutHasBeenInvoked = true;

      Animated.timing(this.translateY, {
        duration: 0,
        toValue: (height + this.offset) * -1,
        useNativeDriver: true
      }).start();
    }
  };

  protected renderCustomComponent(): ReactNode {
    return this.props.customComponent;
  }

  protected renderOwnComponent(): ReactNode {
    const {textColor, text} = this.props;
    return <Text style={[IOStyle.text, {color: textColor}]}>{text}</Text>;
  }
}
