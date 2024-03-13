import { styled } from '@/styles'
import { Button } from '../Button'
import { Text } from '../Text'

export const Container = styled('header', {
  height: '$16',
  color: '$gray12',
  background: '$blue5',
  borderBottom: '1px solid $gray12',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.5) 0px 3px 7px -3px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,

  '@media(max-width: 425px)': {
    height: '$20',
  },
})

export const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  margin: '0 $6',

  // Pegar isso aqui
  '@media(max-width: 425px)': {
    height: '$20',

    [`> ${Button}`]: {
      display: 'none',
    },
  },
})

export const ContentLinks = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  padding: '$5 $10',
  gap: '$4',

  '> a': {
    all: 'unset',
    fontSize: '$md',
    cursor: 'pointer',
    padding: '$1 $2',
    borderRadius: '$sm',

    display: 'inline-block',
    position: 'relative',
    alignItems: 'center',

    '&.active': {
      color: '$gray12',
      borderBottom: '2px solid $tomato8',
      fontSize: '0.85rem',
    },

    '&:hover': {
      color: '$gray12',
      borderBottom: '2px solid $tomato8',
      fontSize: '1.0rem',
    },

    '@media(max-width: 1368px)': {
      fontSize: '0.85rem',

      '&:hover': {
        fontSize: '0.85rem',
      },
    },
  },

  '@media(max-width: 425px)': {
    padding: '$5 $5',

    '> a': {
      fontSize: '$sm',
    },
  },
})

export const SeparationsContent = styled('div', {
  border: '1px solid $gray12',
  height: '1.5rem',
  borderRadius: '$full',
})

export const ContentImage = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  textDecoration: 'none',

  'div.site': {},

  'div.img': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [`> ${Text}`]: {
      marginTop: '-$3',
      color: '#FFF',
      fontSize: '$sm',
    },
  },
})

export const ButtonsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',

  [`> ${Button}`]: {
    fontSize: '0.85rem',
    fontWeight: '$regular',
    padding: '$3 $4',

    '@media(max-width: 1368px)': {
      padding: '$2 $3',
      fontSize: '0.69rem',
    },
  },
})
