import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { styled } from '@/styles'

export const Container = styled('div', {
  maxWidth: 780,
  border: '2px solid $blue7',
  borderRadius: '$sm',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 auto',
  padding: '0 0 $16',
  gap: '$4',
  boxShadow:
    'rgba(50, 50, 93, 0.75) 0px 6px 12px -2px, rgba(0, 0, 0, 0.9) 0px 3px 7px -3px',
})

export const Header = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$orange9',
  borderTopLeftRadius: '$sm',
  color: '$gray12',
  marginBottom: '$8',

  '> img': {
    borderTopLeftRadius: '$sm',
  },

  [`> ${Text}`]: {
    display: 'flex',
    textAlign: 'center',
    padding: '0 $4',
  },
})

export const Content = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$4',

  [`> ${Button}`]: {
    marginTop: '$4',
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
})
