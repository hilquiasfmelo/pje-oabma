import { styled } from '@/styles'

export const Container = styled('div', {
  maxWidth: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  position: 'relative',

  '@media(max-width: 425px)': {
    margin: '10rem 8rem',
    justifyContent: 'flex-start',
    minHeight: 'calc(100vh - 100px)',
  },

  '@media(max-width: 414px)': {
    margin: '11rem 8rem',
    justifyContent: 'flex-start',
    minHeight: 'calc(100vh - 100px)',
  },

  '@media(max-width: 390px)': {
    margin: '12.5rem 8rem',
    justifyContent: 'flex-start',
    minHeight: 'calc(100vh - 100px)',
  },

  '@media(max-width: 360px)': {
    margin: '13.5rem 8rem',
    justifyContent: 'flex-start',
    minHeight: 'calc(100vh - 100px)',
  },
})
