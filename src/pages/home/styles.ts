import { styled } from '@/styles'

export const Container = styled('div', {
  width: '0 auto',
  height: '40rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  '@media(min-width: 1369px)': {
    height: '45rem',
  },
})
