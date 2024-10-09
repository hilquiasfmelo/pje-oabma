import { Button } from '@/components/Button'
import { styled } from '@/styles'

export const Container = styled('div', {
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  position: 'relative',

  '@media (max-width: 425px)': {
    display: 'flex',
    margin: '15rem 25rem',
    height: '100vh',
  },
})

export const ContentWarning = styled('div', {
  width: '600px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyItems: 'center',
  gap: '$3',

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    gap: '$2',

    strong: {
      color: '#A42A12',
      fontSize: '30px',
    },

    span: {
      fontSize: '18px',
      fontWeight: '$bold',
      textAlign: 'center',
    },
  },

  a: {
    width: '100%',
    textDecoration: 'none',

    [`> ${Button}`]: {
      width: '100%',
      fontSize: '$md',
    },
  },

  p: {
    fontWeight: '$medium',
  },
})
