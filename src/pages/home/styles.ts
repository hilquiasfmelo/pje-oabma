import { styled } from '@/styles'

export const Container = styled('div', {
  maxWidth: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Content = styled('div', {
  maxWidth: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ContentPages = styled('div', {
  margin: '$1',
  padding: '$10',
  border: '3px solid $blue9',
  borderRadius: '$sm',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.9) 0px 3px 7px -3px',
})

export const ContentOptions = styled('div', {
  minWidth: 380,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$10',
})
