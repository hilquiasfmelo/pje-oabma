import { styled } from '@/styles';
import { Button } from '../Button';
import { Text } from '../Text';

export const Container = styled('header', {
  height: '$16',
  color: '$gray12',
  background: '$blue5',
  borderBottom: '1px solid $gray12',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.5) 0px 3px 7px -3px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$8',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,

  '@media(min-width: 1369px)': {
    height: '$20',
  },
});

export const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  margin: '0 $10',

  [`> ${Button}`]: {
    fontSize: '0.85rem',
    fontWeight: '$regular',
    padding: '$3 $4',

    '&:hover': {
      background: '$tomato8',
      transition: '0.6s',
    },

    '@media(max-width: 1368px)': {
      padding: '$2 $3',
      fontSize: '0.69rem',
    },
  },
});

export const ContentLinks = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  '> a': {
    all: 'unset',
    fontSize: '$md',
    cursor: 'pointer',
    padding: '$1 $2',
    borderRadius: '$md',

    display: 'inline-block',
    position: 'relative',
    alignItems: 'center',

    '&:hover': {
      background: '$orange9',
      transition: '0.6s',
      border: '1px solid $gray12',
      boxShadow:
        'rgba(50, 50, 93, 0.75) 0px 6px 12px -2px, rgba(0, 0, 0, 0.9) 0px 3px 7px -3px',
    },

    '@media(max-width: 1368px)': {
      fontSize: '$sm',
    },
  },
});

export const SeparationsContent = styled('div', {
  border: '1px solid $gray12',
  height: '1.5rem',
  borderRadius: '$full',
});

export const ContentImage = styled('a', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  cursor: 'pointer',
  textDecoration: 'none',

  [`> ${Text}`]: {
    marginTop: '-$3',
    color: '#FFF',
  },
});
