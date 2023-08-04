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
  width: '$16',
  height: '$16',
  borderRadius: '$full',
  background: '$tomato8',
  color: 'white',
  position: 'absolute',
  zIndex: 1,
  animation: `${floatFromUpDown} 2s ease-in-out infinite`,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  bottom: 0,
  marginBottom: '$16',
  marginLeft: '$2',

  a: {
    all: 'unset',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    svg: {
      width: '$8',
      height: '$8',
    },

    strong: {
      fontSize: '$xs',
    },
  },

  '@media(max-width: 425px)': {
    display: 'none',
  },
})
