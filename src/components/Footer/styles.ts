import { styled } from '@/styles'

export const Container = styled('footer', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '$64',
  margin: '0',
  background: '$tomato8',
  color: '$gray12',
  display: 'flex',
  alignItems: 'center',
  clipPath:
    'polygon(0 0, 20% 30px, 40% 0, 60% 30px, 80% 0, 100% 30px, 100% 100%, 0 100%)',
})
