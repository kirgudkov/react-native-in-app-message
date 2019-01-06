import React, {ReactNode} from 'react';

export interface NotificationProperties {
  blurType?: 'xlight' | 'light' | 'dark',
  duration?: number,
  autohide?: boolean,
  blurAmount?: number,
  text?: string,
  textColor?: string,
  customComponent?: ReactNode,
  onPress?: () => void
}

export class Notification extends React.Component<NotificationProperties, {}> {
  showNotification: Function;
  hideNotification: Function;
}
