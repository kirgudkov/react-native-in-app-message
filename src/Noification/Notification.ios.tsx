import React, {ReactNode} from 'react';
import {Animated, Dimensions, View, Text} from 'react-native';
import {PanGestureHandler, PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import {NotificationBase} from './NotificationBase';
import {BlurView} from "react-native-blur";
import {IOStyle} from "./iOStyle";
import {Util} from "../Util";

export class Notification extends NotificationBase{

  static defaultProps = {
    blurAmount: 7,
    duration: 2000,
    autohide: true
  };

  protected offset: number = Util.isIphoneX() ? 42 : 22;

  render(): ReactNode {
    const {textColor, customComponent, blurAmount, blurType = 'light'} = this.props;
    const animatedStyle = [IOStyle.notification, {top: this.offset, transform: [{translateY: this.translateY}]}];
    return (
      <PanGestureHandler onHandlerStateChange={this.onHandlerStateChange} onGestureEvent={this.onGestureEvent}>
        <Animated.View onLayout={this.handleOnLayout} style={animatedStyle}>
          <BlurView style={IOStyle.absolute} blurType={blurType} blurAmount={blurAmount} />
          <View style={IOStyle.content}>
            {customComponent ? this.renderCustomComponent() : this.renderOwnComponent()}
          </View>
          <View style={[IOStyle.knob, {backgroundColor: textColor}]} />
        </Animated.View>
      </PanGestureHandler>
    )
  }
}
