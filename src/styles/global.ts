import { globalCss } from './index'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    outline: 'none',
    padding: 0,
    margin: 0,
  },

  body: {
    fontFamily: 'Roboto Slab, sans-serif',
    color: '$gray4',
    background: '$gray12',
    '-webkit-font-smoothing': 'antialiased',
  },
})
