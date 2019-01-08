import {ReactNode} from "react";
import {
  ForceTouchGestureHandlerGestureEvent,
  ForceTouchGestureHandlerStateChangeEvent,
  PanGestureHandlerGestureEvent
} from "react-native-gesture-handler";
import {StyleProp, ViewStyle} from "react-native";

export interface Props {
  blurType?: 'xlight' | 'light' | 'dark', // iOS Only
  blurAmount?: number, // iOS Only
  duration?: number,
  autohide?: boolean,
  showKnob?: boolean,
  text?: string,
  style?: StyleProp<ViewStyle> | {}, // iOS Only
  textColor?: string,
  customComponent?: ReactNode,
  onPress?: () => void,
  onDragGestureEvent?: (event: PanGestureHandlerGestureEvent) => void,
  onDragGestureHandlerStateChange?: (event: PanGestureHandlerGestureEvent) => void,
  onForceTouchGestureEvent?: (event: ForceTouchGestureHandlerGestureEvent) => void, // iOS Only and iPhone 6s+
  onForceTouchHandlerStateChange?: (event: ForceTouchGestureHandlerStateChangeEvent) => void, // iOS Only and iPhone 6s+
  useForceTouch?: boolean //iOS Only and iPhone 6s+
}
