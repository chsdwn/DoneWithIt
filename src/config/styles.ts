import { IS_ANDROID } from '../constants/app';
import _colors from './colors';

export const colors = _colors;

export const text = {
  fontSize: 18,
  fontFamily: IS_ANDROID ? 'Roboto' : 'Avenir',
  color: colors.dark,
};
