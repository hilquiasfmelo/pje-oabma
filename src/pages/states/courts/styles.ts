import { Button } from '@/components/Button'
import { styled } from '@/styles'

export const Container = styled('div', {
  maxWidth: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  gap: '$40',
  position: 'relative',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 480,
  padding: '$4 $2',
  border: '2px solid $blue7',
  borderRadius: '$sm',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.9) 0px 3px 7px -3px',

  label: {
    display: 'flex',
    flexDirection: 'column',
    padding: '$3 $4',
    gap: '$2',

    input: {
      fontSize: '$md',
      padding: '$3 $4',
      border: '2px solid $gray11',
      borderRadius: '$sm',

      '&:focus': {
        border: '2px solid $orange9',
      },
    },
  },
})

export const ContentOptions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '$3 $4',
  width: '100%',
  gap: '$4',
  outline: 0,

  select: {
    width: '100%',
    padding: '$3 $4',
    borderRadius: '$sm',
    border: '2px solid $gray11',
    fontSize: '$md',
    background: '#FFF',
    cursor: 'pointer',
    appearance: 'none',
    outline: 0,

    '&:focus': {
      border: '2px solid $orange9',
    },

    option: {
      padding: '$5',
      background: '#FFF',
      fontWeight: '$bold',
      color: '$gray5',
      borderRadius: '$sm',
      fontFamily: 'Roboto Slab',
      outline: 0,
    },
  },
})

export const FormActions = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '$5',
  padding: '0 $4',

  [`> ${Button}`]: {
    fontSize: '$md',
    padding: '$1 $5',
  },
})
