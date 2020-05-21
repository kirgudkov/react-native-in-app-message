import React, { Fragment } from 'react';
import {
  Animated,
  View,
  Text,
} from 'react-native';
import {
  PanGestureHandler,
  TapGestureHandler
} from 'react-native-gesture-handler';
import { NotificationBase } from './NotificationBase';
import { androidStyle } from './androidStyle';

const MIN_VELOCITY_TO_FLING = -350;
const BOUNCE_OFFSET = 150;

export class Notification extends NotificationBase {

  static defaultProps = {
    duration: 2000,
    autohide: true,
  };

  offset = 0;

  onHandlerStateChange = (event) => {
    const {velocityY, translationY, numberOfPointers, state} = event.nativeEvent;

    if (this.props.onDragGestureHandlerStateChange) {
      this.props.onDragGestureHandlerStateChange(event);
    }

    if (state === 5) {
      if (velocityY < MIN_VELOCITY_TO_FLING && numberOfPointers === 1) {
        Animated.spring(this.translateY, {
          toValue: (this.viewHeight + BOUNCE_OFFSET + this.offset * 2) * -1,
          useNativeDriver: true,
          velocity: velocityY,
        }).start();
        return;
      }

      if (translationY > ((this.viewHeight / 2) * -1)) {
        this.show();
      } else {
        this.hide();
      }
    }
  };

  renderOwnComponent() {
    const {textColor, text} = this.props;
    return <Text style={[androidStyle.text, {color: textColor}]}>{text}</Text>;
  }

  render() {

    const {
      customComponent,
      onPress,
      style,
    } = this.props;

    const animatedStyle = [
      androidStyle.notification,
      style,
      {
        top: this.offset,
        transform: [{translateY: this.translateY}],
      },
    ];

    return (
      <Fragment>
        <PanGestureHandler
          onHandlerStateChange={this.onHandlerStateChange}
          onGestureEvent={this.onGestureEvent}>

          <Animated.View
            onLayout={this.handleOnLayout}
            style={animatedStyle}>

            <TapGestureHandler
              style={androidStyle.container}
              onHandlerStateChange={this.onTapHandlerStateChange}>
              <View style={androidStyle.content}>
                {customComponent ? customComponent : this.renderOwnComponent()}
              </View>
            </TapGestureHandler>

          </Animated.View>

        </PanGestureHandler>
      </Fragment>
    );
  }
}
