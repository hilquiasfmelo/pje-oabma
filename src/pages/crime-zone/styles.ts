import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { styled } from '@/styles'

export const Main = styled('div', {
  maxWidth: '100%',
  display: 'flex',
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

export const Container = styled('div', {
  maxWidth: 880,
  border: '1px solid $gray5',
  borderRadius: '$sm',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 auto',
  padding: '0 0 $16',
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
  color: '$gray12',
  marginBottom: '$10',
  padding: '$3',

  '> img': {
    borderTopLeftRadius: '$sm',
    marginLeft: '$4',
  },

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

export const Content = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$8',

  [`> ${Button}`]: {
    marginTop: '$4',
  },

  '@media(max-width: 425px)': {
    [`> ${Button}`]: {
      padding: '$5 $6',
      fontSize: '$md',
    },
  },
})

export const ContentOptions = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',

  select: {
    padding: '$2 $5',
    borderRadius: '$sm',
    border: '2px solid $orange9',
    fontSize: '$sm',
    color: '$gray1',
    background: '#FFF',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    option: {
      background: '#FFF',
      color: '$gray5',
      fontFamily: 'Roboto Slab',
    },
  },

  '@media(max-width: 425px)': {
    display: 'flex',
    alignItems: 'center',
    gap: '$5',

    select: {
      padding: '$3 $5',
      fontWeight: '$bold',
      fontSize: '$sm',
    },
  },
})
