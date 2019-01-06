import {ReactNode} from "react";

export interface Props {
  blurType?: 'xlight' | 'light' | 'dark', // iOS Only
  blurAmount?: number, // iOS Only
  duration?: number,
  autohide?: boolean,
  showKnob?: boolean,
  text?: string,
  textColor?: string,
  customComponent?: ReactNode,
  onPress?: () => void
}
