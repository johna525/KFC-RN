
import RF from 'react-native-responsive-fontsize';

const NAMED_COLORS = {
  white: 'rgba(255, 255, 255, 1)',
  black: 'rgba(0, 0, 0, 1)',
  lightMask: 'rgba(0, 0, 0, 0.10)',
  redBrown: 'rgba(162, 24, 40, 1)',
  redBrownDark: 'rgba(140, 10, 16, 1)',
  transparent: 'transparent',
  darkGray: 'rgba(29, 29, 27, 1)',
  gray: 'rgba(206, 206, 206, 1)',
  davyGray: 'rgba(85, 85, 85, 1)',
  alto: 'rgba(235, 235, 235, 1)',
  fbBlue: 'rgba(56, 92, 169, 1)',
  red: 'rgba(228, 0, 43, 1)',
  tamarillo: 'rgba(146, 20, 34, 1)'
};

const THEME_COLORS = {
  // pass through for use with colorWithAlpha
  ...NAMED_COLORS,

  // alias the named colors by use-case
  colorPrimary: NAMED_COLORS.red,
  colorPrimaryDark: NAMED_COLORS.tamarillo,
  textColorPrimary: NAMED_COLORS.white,
  lightBackground: NAMED_COLORS.white
};

const FONT_FAMILIES = {
  knockout27: 'Knockout-HTF27-JuniorBantamwt',
  knockout68: 'Knockout-HTF68-FullFeatherwt',
  knockout92: 'Knockout-HTF92-UltmtCruiserwt',
  robotoLight: 'Roboto-Light',
  robotoRegular: 'Roboto-Regular',
  robotoMedium: 'Roboto-Medium',
  robotoBold: 'Roboto-Bold'
};

const styleConstants = {
  colors: {
    ...THEME_COLORS
  },
  fontSizes: {
    xxSmall: 10,
    xSmall: 12,
    small: 14,
    default: 16,
    medium: 18,
    large: 20,
    xLarge: 22,
    xxLarge: 24,
    xxxLarge: 26,
    xxxxLarge: 28
  },
  fonts: {
    ...FONT_FAMILIES
  },
  borderRadius: 20
};

export default {
  ...styleConstants,

  colorWithAlpha(name: string = 'white', opacity: number = 1) {
    if (!THEME_COLORS[name]) {
      name = 'white';
    }
    return THEME_COLORS[name].split(', 1)').join(`, ${opacity})`);
  },
  colorHex(name: string = 'white') {
    if (!THEME_COLORS[name]) {
      name = 'white';
    }

    let rgb = THEME_COLORS[name];

    rgb = rgb.match(
      /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
    );
    return rgb && rgb.length === 4
      ? `#${`0${parseInt(rgb[1], 10).toString(16)}`.slice(-2)}${`0${parseInt(
        rgb[2],
        10
      ).toString(16)}`.slice(-2)}${`0${parseInt(rgb[3], 10).toString(
        16
      )}`.slice(-2)}`
      : '';
  },

  getSpacing: multiplyer => multiplyer * 4,
  getFontSize: size => RF(size * 0.14),
};
