import { globalCss } from './index'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    outline: 'none',
    padding: 0,
    margin: 0,
  },

  body: {
    fontFamily: 'Inter, sans-serif',
    color: '$gray4',
    background: '#fff',
    '-webkit-font-smoothing': 'antialiased',
  },
})
