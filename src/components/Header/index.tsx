import Image from 'next/image'

import { Container } from './styles'

import pjeLogo from '@/assets/pje-oabma.png'

export function Header() {
  return (
    <Container>
      <Image
        src={pjeLogo}
        width={110}
        height={80}
        quality={100}
        priority
        alt="Logo Pje"
      />
    </Container>
  )
}
