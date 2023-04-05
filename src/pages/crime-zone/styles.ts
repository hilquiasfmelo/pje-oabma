import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { styled } from '@/styles'

export const Container = styled('div', {
  maxWidth: 880,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  position: 'relative',
  margin: '1rem auto 0',

  '@media (max-width: 425px)': {
    display: 'flex',
    margin: '15rem 25rem',
    height: '100vh',
  },
})

export const Content = styled('div', {
  maxWidth: 880,
  border: '2px solid $gray5',
  borderRadius: '$sm',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 auto',
  padding: '0 0 $16',
  background: '$gray12',
  gap: '$4',
  boxShadow:
    'rgba(50, 50, 93, 0.75) 0px 6px 12px -2px, rgba(0, 0, 0, 0.9) 0px 3px 7px -3px',

  '@media(max-width: 425px)': {
    padding: '0 6rem 2rem',
  },
})

export const Header = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$gray5',
  borderTopLeftRadius: '$sm',
  borderTopRightRadius: '$sm',
  color: '$gray12',
  marginBottom: '$8',
  padding: '$2 0',

  [`> ${Text}`]: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 $4',
    fontSize: '$2xl',
  },

  '@media(max-width: 425px)': {
    width: '120vw',
    height: '6.2rem',

    '> img': {
      margin: 0,
    },

    [`> ${Text}`]: {
      fontSize: '$md',
    },
  },
})

export const ContentImage = styled('a', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  textDecoration: 'none',
  borderTopLeftRadius: '$sm',
  marginLeft: '$8',

  [`> ${Text}`]: {
    marginTop: '-$3',
    color: '#FFF',
  },
})

export const ContentLinks = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$4',
})

export const ContentOptions = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4rem',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$8',

    [`> ${Button}`]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '$2 $10',
      fontWeight: '$regular',
      borderRadius: 0,
    },
  },

  '@media(max-width: 425px)': {
    display: 'flex',
    alignItems: 'center',
    gap: '$5',
  },
})

export const SeparationsContent = styled('div', {
  border: '1px solid $gray5',
  height: '8rem',
  borderRadius: '$full',
})
