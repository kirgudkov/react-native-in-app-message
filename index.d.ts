import React, {ReactNode} from 'react';
import {
  ForceTouchGestureHandlerGestureEvent,
  ForceTouchGestureHandlerStateChangeEvent, PanGestureHandlerGestureEvent
} from "react-native-gesture-handler";

export interface NotificationProperties {
  blurType?: 'xlight' | 'light' | 'dark',
  showKnob?: boolean,
  duration?: number,
  autohide?: boolean,
  blurAmount?: number,
  text?: string,
  textColor?: string,
  customComponent?: ReactNode,
  onPress?: () => void,
  onDragGestureEvent?: (event: PanGestureHandlerGestureEvent) => void,
  onDragGestureHandlerStateChange?: (event: PanGestureHandlerGestureEvent) => void,
  onForceTouchGestureEvent?: (event: ForceTouchGestureHandlerGestureEvent) => void,
  onForceTouchHandlerStateChange?: (event: ForceTouchGestureHandlerStateChangeEvent) => void,
  useForceTouch?: boolean
}

export class Notification extends React.Component<NotificationProperties, {}> {
  static show: Function;
  static hide: Function;
}
