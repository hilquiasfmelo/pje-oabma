import Image from 'next/image'
import { Globe } from 'phosphor-react'

import { Text } from '@/components/Text'
import { Button } from '@/components/Button'

import oabLogo from '@/assets/logo-oabma.png'

import { Main, Container, Content, Header, ContentOptions } from './styles'

export default function CrimeZone() {
  return (
    <Main>
      <Container>
        <Header>
          <Image
            src={oabLogo}
            width={110}
            height={50}
            priority
            quality={100}
            alt="Logo do Direito"
          />
          <Text as="strong">
            Disponibilizamos essa área para acesso direto aos principais
            Sistemas Criminais
          </Text>
        </Header>

        <Content>
          <Text as="span" size="lg">
            Existem esses disponíveis no momento, escolha qual você deseja
            acessar:
          </Text>
          <ContentOptions>
            <Button type="button">
              <Globe size={20} />
              SEEU
            </Button>

            <Button type="button">
              <Globe size={20} />
              SIISP
            </Button>
          </ContentOptions>
        </Content>
      </Container>
    </Main>
  )
}
