import {
  gray,
  blue,
  tomato,
  green,
  bronze,
  orange,
  orangeDark,
  bronzeDark,
  grayDark,
  blueDark,
  tomatoDark,
  greenDark,
} from '@radix-ui/colors'
import {
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from './tokens'

import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors: {
      ...gray,
      ...grayDark,
      ...blue,
      ...blueDark,
      ...tomato,
      ...tomatoDark,
      ...green,
      ...greenDark,
      ...bronze,
      ...bronzeDark,
      ...orange,
      ...orangeDark,
    },
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
