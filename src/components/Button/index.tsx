import { keyframes, styled } from '@/styles'
import { ComponentProps, ElementType } from 'react'

const loading = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },

  to: {
    transform: 'rotate(360deg)',
  },
})

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$bold',
  padding: '$3 $4',
  background: '$blue7',
  color: '$gray12',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  '&:not(:disabled):hover': {
    background: '$blue5',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        '&:not(:disabled):hover': {
          background: '$blue5',
        },
      },

      secondary: {
        '&:not(:disabled):hover': {
          background: '$gray10',
        },
      },

      danger: {
        '&:not(:disabled):hover': {
          background: '$tomato7',
        },
      },

      spinner: {
        '> svg': {
          width: '$6',
          height: '$6',
          color: '$gray12',
          fontWeight: '$bold',
          animation: `${loading} 5s linear infinite`,
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
