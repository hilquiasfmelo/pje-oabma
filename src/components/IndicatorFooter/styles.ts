import { keyframes, styled } from '@/styles'

const floatFromUpDown = keyframes({
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-10px)',
  },
  '100%': {
    transform: 'translateY(0px)',
  },
})

export const Container = styled('div', {
  width: '$12',
  height: '$12',
  borderRadius: '$full',
  background: '$blue7',
  color: 'white',
  position: 'absolute',
  zIndex: 1,
  animation: `${floatFromUpDown} 2s ease-in-out infinite`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  bottom: 0,
  marginBottom: '$7',
  marginLeft: '$3',

  a: {
    all: 'unset',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    svg: {
      width: '$5',
      height: '$5',
    },

    strong: {
      fontSize: '$xxs',
      fontWeights: '$regular',
    },
  },

  '@media(max-width: 425px)': {
    display: 'none',
  },
})
