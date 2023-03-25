// import getConfig from 'next/config'
import { styled } from '@/styles'

// const { publicRuntimeConfig } = getConfig()
// const { imagesPath } = publicRuntimeConfig

// const oabLogo = `${imagesPath}/pje-oabma.png`

export const Container = styled('div', {
  maxWidth: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  position: 'relative',
  background: 'radial-gradient(circle, #ddd 5%, transparent 11%)',
  backgroundSize: '3em 3em',
  backgroundColor: '#ffffff',
  opacity: 1,
  // background: `url(${oabLogo})`,
  // backgroundSize: 'cover',

  '@media (max-width: 425px)': {
    display: 'flex',
    margin: '15rem 25rem',
    height: '100vh',
  },
})
