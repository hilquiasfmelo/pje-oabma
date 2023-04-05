import { Button } from '@/components/Button'
import { styled } from '@/styles'

export const Container = styled('div', {
  maxWidth: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 380,
  padding: '0 $2 $4',
  border: '2px solid $blue7',
  borderRadius: '$sm',
  background: '$gray12',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.9) 0px 3px 7px -3px',

  label: {
    display: 'flex',
    flexDirection: 'column',
    padding: '$2 $4',
    gap: '$2',

    input: {
      fontSize: '$sm',
      padding: '$2 $2',
      border: '2px solid $gray11',
      borderRadius: '$sm',

      '&:focus': {
        border: '2px solid $tomato8',
      },
    },
  },

  '@media(min-width: 1369px)': {
    width: 430,
    padding: '$4 $2',

    label: {
      padding: '$3 $4',
    },

    input: {
      fontSize: '$md',
      padding: '$3 $4',
    },
  },
})

export const ContentOptions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '$3 $4',
  gap: '$3',

  select: {
    padding: '$2 $4',
    borderRadius: '$sm',
    border: '2px solid $gray11',
    fontSize: '$sm',
    background: '#FFF',
    cursor: 'pointer',
    outline: 0,

    '&:focus': {
      border: '2px solid $tomato8',
    },

    option: {
      padding: '$5',
      background: '#FFF',
      fontWeight: '$bold',
      color: '$gray5',
      borderRadius: '$sm',
      fontFamily: 'Inter',
      outline: 0,
    },
  },

  '@media(min-width: 1369px)': {
    select: {
      padding: '$3 $4',
    },
  },
})

export const FormActions = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '$5',
  padding: '0 $4',

  [`> ${Button}`]: {
    fontSize: '$sm',
    padding: '$2 $5',
  },
})
