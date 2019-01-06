import React, {ReactNode} from 'react';
import {Animated, Dimensions, View, Text, TouchableOpacity} from 'react-native';
import {PanGestureHandler, PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import {NotificationBase} from './NotificationBase';
import {androidStyle} from "./androidStyle";

export class Notification extends NotificationBase {

  static defaultProps = {
    duration: 2000,
    autohide: true
  };

  protected offset = 0;

  protected renderOwnComponent(): ReactNode {
    const {textColor, text} = this.props;
    return <Text style={[androidStyle.text, {color: textColor}]}>{text}</Text>;
  }

  render(): ReactNode {
    const {customComponent, onPress} = this.props;
    const animatedStyle = [androidStyle.notification, {top: this.offset, transform: [{translateY: this.translateY}]}];
    return (
      <PanGestureHandler onHandlerStateChange={this.onHandlerStateChange} onGestureEvent={this.onGestureEvent}>
        <Animated.View onLayout={this.handleOnLayout} style={animatedStyle}>
          <TouchableOpacity style={androidStyle.container} activeOpacity={1} onPress={onPress}>
            <View style={androidStyle.content}>
              {customComponent ? this.renderCustomComponent() : this.renderOwnComponent()}
            </View>
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
    )
  }
}
