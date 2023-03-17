import { styled } from '@/styles';

import { Text } from '../Text';

export const Container = styled('footer', {
  height: '$64',
  background: '$tomato8',
  color: '$gray12',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 $20',
  fontSize: '$xs',
  clipPath:
    'polygon(0 0, 20% 30px, 40% 0, 60% 30px, 80% 0, 100% 30px, 100% 100%, 0 100%)',

  '@media(max-width: 1368px)': {
    height: '17rem',
    padding: '$7 $10 $5',
  },
});

export const ContentPrimary = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: 400,

  '> span': {
    marginTop: '$4',
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    fontWeight: '$regular',

    '> strong': {
      display: 'flex',
    },
  },
});

export const ProgramsLinks = styled('div', {
  marginTop: '$4',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  placeItems: 'flex-start',
  width: '100%',
  gap: '$2',

  dd: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$1',
    marginTop: '$3',
    cursor: 'pointer',

    '&:hover': {
      color: '$orange9',
    },
  },
});

export const ContentImage = styled('a', {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  borderBottom: '1px solid $gray12',
  gap: '$2',
  width: '100%',

  [`> ${Text}`]: {
    marginTop: '-$4',
    color: '#FFF',
    fontSize: '$xs',
  },
});

export const Contacts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '$2',
  width: 400,

  '> div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$4',

    svg: {
      fontSize: 30,
    },

    [`> ${Text}`]: {
      fontSize: '$sm',
    },

    '@media(max-width: 1368px)': {
      '> svg': {
        fontSize: '1.5rem',
      },

      [`> ${Text}`]: {
        fontSize: '$xs',
      },
    },
  },
});

export const About = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: 400,
});
