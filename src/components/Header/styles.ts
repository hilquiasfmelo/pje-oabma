import { styled } from '@/styles'
import { Text } from '../Text'

export const Container = styled('header', {
  maxWidth: '100%',
  height: '$30',
  color: '$gray12',
  background: '$blue5',
  borderBottom: '1px solid $gray12',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.5) 0px 3px 7px -3px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$5',
  margin: '0 $1 ',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
})

export const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  margin: '0 $10',
})

export const ContentImage = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  [`> ${Text}`]: {
    marginTop: '-$3',
  },
})
