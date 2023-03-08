import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { styled } from '@/styles'

export const Container = styled('div', {
  maxWidth: 1020,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$16',
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$orange9',
  padding: '$10',
  borderRadius: '$sm',
  color: '$gray12',

  '> img': {
    borderRadius: '$sm',
  },

  [`> ${Text}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$10',

  [`> ${Button}`]: {
    width: '$64',
    padding: '$2',
  },
})

export const ContentOptions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',

  select: {
    width: '$64',
    padding: '$5',
    borderRadius: '$sm',
    border: '2px solid $gray4',
    fontSize: '$lg',
    color: '$gray1',
    background: '#FFF',
    cursor: 'pointer',
    appearance: 'none',

    option: {
      padding: '$5',
      background: '#FFF',
      fontWeight: '$bold',
      color: '$gray5',
      borderRadius: '$sm',
    },
  },
})
