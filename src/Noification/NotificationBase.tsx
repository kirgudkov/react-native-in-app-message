import React, {ReactNode} from 'react';
import {Animated, Text, Easing, Platform} from "react-native";
import {PanGestureHandlerGestureEvent, State} from "react-native-gesture-handler";
import {IOStyle} from "./iOStyle";
import {Props} from './Props';
import {TapticFeedback} from "../../index";

const animatedDuration = 400;
const minVelocityToFling = -250;

const IS_IOS = Platform.OS === 'ios';

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
        throw new Error('Unable to show Notification, because there is no instance of Notification');
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
    const {onShow, tapticFeedback} = this.props;
    clearTimeout(this.timer);
    Animated.timing(this.translateY, {
      toValue: 0,
      useNativeDriver: true,
      duration: animatedDuration,
      easing: Easing.bezier(.0, .74, .27, 1.19)
    }).start(this.autohide);

    if (onShow) {
      onShow();
    }

    if (tapticFeedback && IS_IOS) {
      TapticFeedback.fire();
    }
  };

  public hide = (): void => {
    Animated.timing(this.translateY, {
      toValue: (this.viewHeight + this.offset * 2) * -1,
      useNativeDriver: true,
      duration: animatedDuration,
      easing: Easing.bezier(.53, .67, .19, 1.1)
    }).start();
    if (this.props.onHide) {
      this.props.onHide();
    }
  };

  private autohide = () => {
    const {autohide, duration} = this.props;
    autohide && (this.timer = setTimeout(this.hide, duration));
  };

  protected onGestureEvent = (event: PanGestureHandlerGestureEvent): void => {
    const {translationY} = event.nativeEvent;

    this.translateY.setValue(translationY > 0 ? translationY / 9 : translationY / 3.5);

    if (this.props.onDragGestureEvent) {
      this.props.onDragGestureEvent(event);
    }
  };

  protected onHandlerStateChange = (event: PanGestureHandlerGestureEvent): void => {
    const {velocityY, translationY, numberOfPointers} = event.nativeEvent;

    if (this.props.onDragGestureHandlerStateChange) {
      this.props.onDragGestureHandlerStateChange(event);
    }

    if (velocityY < minVelocityToFling && numberOfPointers === 0) {
      Animated.spring(this.translateY, {
        toValue: (this.viewHeight + this.offset * 2) * -1,
        useNativeDriver: true,
        velocity: velocityY,
      }).start();
      return;
    }

    if (translationY > ((this.viewHeight / 2) * -1) && numberOfPointers === 0) {
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
      this.translateY.setValue((height + this.offset * 2) * -1)
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
