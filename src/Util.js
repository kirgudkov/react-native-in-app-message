import { Dimensions } from 'react-native';

export class Util {
  static isIphoneX() {
    const {height, width} = Dimensions.get('window');
    return (height / width) > 2.163;
  }
}
