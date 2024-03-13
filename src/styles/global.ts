import { globalCss } from './index'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
    outline: 'none',
    padding: 0,
    margin: 0,
  },

  body: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    color: '$gray4',
    background: 'radial-gradient(circle, #ddd 5%, transparent 11%)',
    backgroundSize: '3em 4em',
    backgroundColor: '#ffffff',
    opacity: 1,

    '-webkit-font-smoothing': 'antialiased',
    // Configuração customizado da scrollbar default
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 5px #ccc',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#A42A12',
      borderRadius: '1px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#7b200e',
    },
  },
})
