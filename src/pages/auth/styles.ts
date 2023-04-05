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
  padding: '$6 $3',
  border: '2px solid $blue7',
  borderRadius: '$sm',
  background: '$gray12',
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
        border: '2px solid $tomato8',
      },
    },

    [`> ${Button}`]: {
      fontSize: '$md',
    },
  },
})

export const FormActions = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '$5',
  padding: '0 $4',
  width: '100%',

  [`> ${Button}`]: {
    fontSize: '$md',
    padding: '$3 $6',
  },
})
