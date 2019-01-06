import React, {ReactNode} from 'react';
import {Animated, Dimensions, View, Text, TouchableOpacity} from 'react-native';
import {PanGestureHandler, PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import {NotificationBase} from './NotificationBase';
import {BlurView} from "react-native-blur";
import {IOStyle} from "./iOStyle";
import {Util} from "../Util";

export class Notification extends NotificationBase {

  static defaultProps = {
    blurAmount: 7,
    duration: 2000,
    showKnob: true,
    autohide: true
  };

  protected offset: number = Util.isIphoneX() ? 42 : 22;

  render(): ReactNode {
    const {textColor, customComponent, blurAmount, blurType = 'light', onPress, showKnob} = this.props;
    const animatedStyle = [IOStyle.notification, {top: this.offset, transform: [{translateY: this.translateY}]}];
    return (
      <PanGestureHandler onHandlerStateChange={this.onHandlerStateChange} onGestureEvent={this.onGestureEvent}>
        <Animated.View onLayout={this.handleOnLayout} style={animatedStyle}>
          <TouchableOpacity style={IOStyle.container} activeOpacity={1} onPress={onPress}>
            <BlurView style={IOStyle.absolute} blurType={blurType} blurAmount={blurAmount} />
            <View style={IOStyle.content}>
              {customComponent ? this.renderCustomComponent() : this.renderOwnComponent()}
            </View>
            {showKnob && <View style={[IOStyle.knob, {backgroundColor: textColor}]} />}
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
    )
  }
}
