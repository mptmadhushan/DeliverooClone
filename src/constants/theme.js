import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {

  primary: '#00a396', 
  secondary: '#4d7c1b', 
  third: '#e67400', 


  black: '#2e3333',
  white: '#FFFFFF',

  transparent: 'transparent',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'IBMPlexSans-BoldItalic', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'IBMPlexSans-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'IBMPlexSans-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'IBMPlexSans-Regular', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'IBMPlexSans-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'IBMPlexSans-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'IBMPlexSans-Regular', fontSize: SIZES.body3},
  body4: {fontFamily: 'IBMPlexSans-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'IBMPlexSans-Regular', fontSize: SIZES.body5, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;