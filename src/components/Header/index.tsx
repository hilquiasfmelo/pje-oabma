import Image from 'next/image'

import { Container, Content, ContentImage } from './styles'

import oabLogo from '@/assets/logo-oabma.png'
import { Text } from '../Text'

export function Header() {
  return (
    <Container>
      <Content>
        <ContentImage>
          <Image
            src={oabLogo}
            width={140}
            height={60}
            quality={100}
            priority
            alt="Logo Pje"
          />

          <Text as="strong">MARANHÃO</Text>
        </ContentImage>

        <h1>+500k</h1>

        <h1>Sobre</h1>
      </Content>
    </Container>
  )
}
