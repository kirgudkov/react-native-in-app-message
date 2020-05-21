import React, {ReactNode} from 'react';
import {StyleProp, ViewStyle} from "react-native";
import {
  ForceTouchGestureHandlerGestureEvent,
  ForceTouchGestureHandlerStateChangeEvent,
  PanGestureHandlerGestureEvent
} from "react-native-gesture-handler";

export interface NotificationProperties {
  blurType?: 'xlight' | 'light' | 'dark', // iOS Only, default - light
  blurAmount?: number, // iOS Only, default - 7
  tapticFeedback?: boolean, //iOS 10+ Only, default - false
  showKnob?: boolean, // default - true
  duration?: number, // default - 2000
  autohide?: boolean, // default - true
  text?: string,
  style?: StyleProp<ViewStyle> | {}, // iOS Only for now
  textColor?: string, // default - black
  customComponent?: ReactNode,
  onPress?: () => void,
  onShow?: () => void,
  onHide?: () => void,
  hideStatusBar?: boolean, // iOS only, default = true
  onDragGestureEvent?: (event: PanGestureHandlerGestureEvent) => void,
  onDragGestureHandlerStateChange?: (event: PanGestureHandlerGestureEvent) => void,
  onForceTouchGestureEvent?: (event: ForceTouchGestureHandlerGestureEvent) => void, // iOS Only and iPhone 6s+
  onForceTouchHandlerStateChange?: (event: ForceTouchGestureHandlerStateChangeEvent) => void, // iOS Only and iPhone 6s+
  useForceTouch?: boolean // iOS Only and iPhone 6s+, default - false
}

export class Notification extends React.Component<NotificationProperties, {}> {
  show: () => void;
  hide: () => void;
}

export interface BlurProps {
  blurType?: 'xlight' | 'light' | 'dark', // iOS Only
  blurAmount?: number // iOS Only
  style?: StyleProp<ViewStyle>
}

export class Blur extends React.Component<BlurProps, {}> {}

// iOS 10+ Only
export class TapticFeedback {
  static impact: Function
}

