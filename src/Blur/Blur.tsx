import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { requireNativeComponent } from 'react-native'

const NativeBlur = requireNativeComponent('Blur');

export class Blur extends Component {
  render () {
    return <NativeBlur pointerEvents={'none'} {...this.props} />
  }
}

Blur.propTypes = {
  blurType: PropTypes.string,
  blurAmount: PropTypes.number,
};
