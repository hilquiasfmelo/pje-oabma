import { Button } from "@/components/Button";
import { styled } from "@/styles";

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
})

export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: 480,
    padding: '$4 $2',
    border: '2px solid $blue7',
    borderRadius: '$sm',
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
            fontWeight: '$bold',
    
            '&:focus': {
                border: '2px solid $orange9',
            }
        },

        [`> ${Button}`]: {
            fontSize: '$md'
        }
    },  
})