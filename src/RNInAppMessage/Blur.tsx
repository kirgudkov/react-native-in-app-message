import React from 'react'
import { requireNativeComponent } from 'react-native'

const NativeBlur = requireNativeComponent('Blur');

interface Props {
  blurType: string,
  blurAmount: number
}

export class Blur extends React.Component<Props, {}> {
  render () {
    return <NativeBlur pointerEvents={'none'} {...this.props} />
  }
}
