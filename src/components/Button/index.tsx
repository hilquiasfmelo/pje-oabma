import { styled } from '@/styles'
import { ComponentProps, ElementType } from 'react'

// const loading = keyframes({
//   from: {
//     transform: 'rotate(0deg)',
//   },

//   to: {
//     transform: 'rotate(360deg)',
//   },
// })

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$lg',
  fontWeight: '$bold',
  textAlign: 'center',
  minWidth: 200,
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      pje: {
        color: '$gray12',
        background: '$blue8',

        '&:not(:disabled):hover': {
          background: '$blue5',
        },

        '&:disabled': {
          backgroundColor: '$gray10',
        },
      },

      // secondary: {
      //   color: '$blue300',
      //   border: '2px solid $blue500',

      //   '&:not(:disabled):hover': {
      //     background: '$blue500',
      //     color: '$white',
      //   },

      //   '&:disabled': {
      //     color: '$gray200',
      //     borderColor: '$gray200',
      //   },
      // },

      // tertiary: {
      //   color: '$gray500',
      //   border: '1px solid $gray400',

      //   '&:not(:disabled):hover': {
      //     color: '$red300',
      //     fontWeight: '$bold',
      //     border: '1px solid $red300',
      //   },

      //   '&:disabled': {
      //     color: '$gray100',
      //     borderColor: '$gray200',
      //   },
      // },

      // spinner: {
      //   color: '$gray500',
      //   border: '1px solid $gray400',

      //   '> svg': {
      //     width: '$6',
      //     height: '$6',
      //     color: '$white',
      //     fontWeight: '$bold',
      //     animation: `${loading} 5s linear infinite`,
      //   },

      //   '&:disabled': {
      //     color: '$gray100',
      //     borderColor: '$gray200',
      //     backgroundColor: '$gray200',
      //   },
      // },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'pje',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
