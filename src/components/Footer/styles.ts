import { styled } from '@/styles'

import { Text } from '../Text'

export const Container = styled('footer', {
  width: '100%',
  height: '18rem',
  background: '$tomato8',
  color: '$gray12',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 $20',
  fontSize: '$sm',
  clipPath:
    'polygon(0 0, 20% 30px, 40% 0, 60% 30px, 80% 0, 100% 30px, 100% 100%, 0 100%)',

  '@media(max-width: 1368px)': {
    height: '17rem',
    padding: '$7 $10 $5',
  },

  '@media(max-width: 425px)': {
    flexDirection: 'row-reverse',
    width: '50rem',
    height: '20rem',
    padding: '$4 $10',
  },
})

export const ContainerLinks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$5',
})

export const ContentLinks = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: 450,
  gap: '$1',

  '> span': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',
    fontWeight: '$bold',

    '@media(max-width: 1368px)': {
      fontSize: '0.80rem',
    },
  },

  '@media(max-width: 425px)': {
    display: 'none',
  },
})

export const ProgramsLinks = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  placeItems: 'flex-start',
  gap: '$2',
  width: '100%',
  position: 'relative',

  '> a': {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '$medium',
    gap: '$1',
    marginTop: '$1',
    cursor: 'pointer',
    fontSize: '$xs',

    img: {
      position: 'absolute',
      visibility: 'hidden',
      opacity: 0,
      bottom: 60,
      left: 50,
      background: '$gray12',
      padding: '$2',
      borderRadius: '$lg',
      zIndex: 1,
      transform: 'translateX(-50%) translateY(-50px)',
      boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
    },

    '&:hover': {
      color: '$gray10',

      img: {
        visibility: 'visible',
        opacity: 1,
        transform: 'translateX(-50%) translateY(0px)',
        transition: '0.5s',
      },
    },
  },

  '@media(max-width: 1368px)': {
    fontSize: '0.78rem',
  },
})

export const ContentImage = styled('a', {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  borderBottom: '1px solid $gray12',
  gap: '$2',
  width: '100%',
  marginBottom: '$4',

  [`> ${Text}`]: {
    marginTop: '-$4',
    color: '#FFF',
    fontSize: '$xs',
  },
})

export const Contacts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  marginTop: '$10',
  gap: '$2',
  width: 400,

  '> div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',

    svg: {
      fontSize: 25,
    },

    [`> ${Text}`]: {
      fontSize: '$sm',
    },

    '@media(max-width: 1368px)': {
      padding: '0 $12',

      '> svg': {
        fontSize: '1.5rem',
      },

      [`> ${Text}`]: {
        fontSize: '0.78rem',
      },
    },

    '@media(max-width: 425px)': {
      svg: {
        fontSize: 30,
      },
    },
  },

  '@media(max-width: 425px)': {
    width: '100%',
    gap: '$3',
  },
})

export const About = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: 400,

  '> strong': {
    fontSize: '$md',
    borderBottom: '1px solid $gray12',
    width: '100%',
    paddingBottom: '$2',
  },

  '> span': {
    marginTop: '$3',
    textAlign: 'justify',
    lineHeight: '$base',
    fontSize: '0.86rem',
  },

  '@media(max-width: 425px)': {
    width: '100%',
  },
})
