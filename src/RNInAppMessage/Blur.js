import React from 'react'
import { requireNativeComponent } from 'react-native'

const NativeBlur = requireNativeComponent('Blur');

export class Blur extends React.Component{
  render () {
    return <NativeBlur pointerEvents={'none'} {...this.props} />
  }
}
