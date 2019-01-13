import React, {ReactNode} from 'react';
import {
  ForceTouchGestureHandlerGestureEvent,
  ForceTouchGestureHandlerStateChangeEvent, PanGestureHandlerGestureEvent
} from "react-native-gesture-handler";
import {StyleProp, ViewStyle} from "react-native";

export interface NotificationProperties {
  blurType?: 'xlight' | 'light' | 'dark', // iOS Only
  blurAmount?: number, // iOS Only
  showKnob?: boolean,
  duration?: number,
  autohide?: boolean,
  text?: string,
  style?: StyleProp<ViewStyle> | {}, // iOS Only for now
  textColor?: string,
  customComponent?: ReactNode,
  onPress?: () => void,
  onDragGestureEvent?: (event: PanGestureHandlerGestureEvent) => void,
  onDragGestureHandlerStateChange?: (event: PanGestureHandlerGestureEvent) => void,
  onForceTouchGestureEvent?: (event: ForceTouchGestureHandlerGestureEvent) => void, // iOS Only and iPhone 6s+
  onForceTouchHandlerStateChange?: (event: ForceTouchGestureHandlerStateChangeEvent) => void, // iOS Only and iPhone 6s+
  useForceTouch?: boolean // iOS Only and iPhone 6s+
}

export class Notification extends React.Component<NotificationProperties, {}> {
  static show: Function;
  static hide: Function;
  show: Function;
  hide: Function;
}
