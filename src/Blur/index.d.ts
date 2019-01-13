import React, {ReactNode} from 'react';

export interface BlurProps {
  blurType: string
  blurAmount: number
}

export class Blur extends React.Component<BlurProps, {}> {}
