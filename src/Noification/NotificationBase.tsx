import React, {ReactNode} from 'react';
import {Animated, Text} from "react-native";
import {PanGestureHandlerGestureEvent} from "react-native-gesture-handler";
import {IOStyle} from "./iOStyle";
import {Props} from './Props';

export class NotificationBase extends React.Component<Props, {}> {

  static show: Function;
  static hide: Function;

  constructor(props: Props) {
    super(props);

    NotificationBase.show = () => this.show();
    NotificationBase.hide = () => this.hide();
  }

  protected translateY: Animated.Value = new Animated.Value(-300);
  protected offset: number = 22;
  protected viewHeight: number = 0;
  protected timer!: number;

  public show = (): void => {
    clearTimeout(this.timer);
    Animated.spring(this.translateY, {
      toValue: 0,
      useNativeDriver: true
    }).start(() => this.props.autohide && (this.timer = setTimeout(this.hide, this.props.duration)));
  };

  public hide = (): void => {
    Animated.spring(this.translateY, {
      toValue: (this.viewHeight + this.offset) * -1,
      useNativeDriver: true
    }).start();
  };

  protected onGestureEvent = (event: PanGestureHandlerGestureEvent): void => {
    const {translationY} = event.nativeEvent;
    this.translateY.setValue(translationY > 0 ? translationY / 10 : translationY);
  };

  protected onHandlerStateChange = (event: PanGestureHandlerGestureEvent): void => {
    if (event.nativeEvent.translationY > ((this.viewHeight / 2) * -1)) {
      this.show();
    } else {
      this.hide();
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
