import { styled } from '.'

export const Container = styled('div', {
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  position: 'relative',
  gap: '$6',

  strong: {
    fontSize: '$5xl',
    fontWeight: '$bold',
    color: '$tomato8',
  },

  a: {
    all: 'unset',
    background: '$blue7',
    color: '$gray12',
    fontWeight: '$bold',
    padding: '$5 $8',
    borderRadius: '$xs',
    cursor: 'pointer',
  },

  '@media (max-width: 425px)': {
    display: 'flex',
    margin: '15rem 25rem',
    height: '100vh',
  },
})
