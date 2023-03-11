import Image from 'next/image'

import { Container, Content, ContentImage } from './styles'

import oabLogo from '@/assets/logo-oabma.png'
import { Text } from '../Text'

export function Header() {
  return (
    <Container>
      <Content>
        <ContentImage
          target="_blank"
          href={process.env.SITE_OABMA}
          title="Ir ao site"
        >
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

        <h2>+500k de usuários usando</h2>

        <h3>Sobre</h3>
      </Content>
    </Container>
  )
}
