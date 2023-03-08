import { styled } from '@/styles'

export const ContainerForm = styled('div', {
  maxWidth: 480,
  margin: '$10 auto $10',
  height: '55vh',
  display: 'flex',
  flexDirection: 'column',
  padding: '$10',
  border: '2px solid $orange9',
  borderRadius: '$md',
  gap: '$4',

  input: {
    all: 'unset',
    padding: '$4',
    borderRadius: '$md',
    border: '1px solid $blue7',
    background: '#fff',
  },

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})
