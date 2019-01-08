import React, {ReactNode, Fragment} from 'react';
import {Animated, Dimensions, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  PanGestureHandler, PanGestureHandlerGestureEvent, ForceTouchGestureHandler,
  ForceTouchGestureHandlerStateChangeEvent,
  ForceTouchGestureHandlerGestureEvent,
  State
} from 'react-native-gesture-handler';
import {NotificationBase} from './NotificationBase';
import {BlurView} from "react-native-blur";
import {IOStyle} from "./iOStyle";
import {Util} from "../Util";

export class Notification extends NotificationBase {

  static defaultProps = {
    blurAmount: 7,
    duration: 2000,
    showKnob: true,
    autohide: true,
    useForceTouch: false
  };

  protected offset: number = Util.isIphoneX() ? 42 : 22;

  render(): ReactNode {
    const {textColor, customComponent, blurAmount, blurType = 'light', onPress, style, useForceTouch, showKnob, onForceTouchGestureEvent, onForceTouchHandlerStateChange} = this.props;
    const animatedStyle = [IOStyle.notification, {top: this.offset, transform: [{translateY: this.translateY}]}, IOStyle.mainStyle];
    const border = style ? style.borderRadius : 14;
    return (
      <Fragment>
        <PanGestureHandler onHandlerStateChange={this.onHandlerStateChange} onGestureEvent={this.onGestureEvent}>
          <Animated.View onLayout={this.handleOnLayout} style={animatedStyle}>
            <Animated.View style={[IOStyle.innerContainer, style]}>
              <TouchableOpacity style={IOStyle.container} activeOpacity={1} onPress={onPress}>
                <BlurView style={[IOStyle.absolute, {borderRadius: border || 14}]} blurType={blurType} blurAmount={blurAmount} />
                <ForceTouchGestureHandler
                  minForce={0.2}
                  enabled={useForceTouch}
                  onGestureEvent={onForceTouchGestureEvent}
                  onHandlerStateChange={onForceTouchHandlerStateChange}>
                  <View style={IOStyle.content}>
                    {customComponent ? this.renderCustomComponent() : this.renderOwnComponent()}
                    {showKnob && <View style={[IOStyle.knob, {backgroundColor: textColor}]} />}
                  </View>
                </ForceTouchGestureHandler>
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
        </PanGestureHandler>
      </Fragment>
    )
  }
}
