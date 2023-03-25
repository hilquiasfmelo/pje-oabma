import { keyframes, styled } from '@/styles'

const appearFromRight = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(50px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0px)',
  },
})

export const AnimationContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  animation: `${appearFromRight} 1s`,
})
