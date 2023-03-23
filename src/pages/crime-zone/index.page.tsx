import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { Link } from 'phosphor-react'

import { Text } from '@/components/Text'
import { Button } from '@/components/Button'

import oabLogo from '@/assets/logo-oabma.png'
import seeuLogo from '@/assets/logo-seeu.svg'
import seapLogo from '@/assets/logo-seap.svg'

import { LINK_SEEU, LINK_SIISP } from '@/utils/links-download'

import {
  Container,
  Content,
  ContentLinks,
  Header,
  ContentOptions,
} from './styles'

export default function CrimeZone() {
  return (
    <>
      <NextSeo title="Área Criminal | Pje OAB-MA" />

      <Container>
        <Content>
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

          <ContentLinks>
            <Text as="span" size="lg">
              Existem esses disponíveis no momento, escolha qual você deseja
              acessar:
            </Text>
            <ContentOptions>
              <div>
                <Image
                  src={seeuLogo}
                  width={150}
                  height={70}
                  priority
                  quality={100}
                  alt="Logo do SEEU"
                />
                <Button
                  type="button"
                  onClick={() => window.open(LINK_SEEU, '_blank')}
                >
                  <Link size={20} />
                  Acessar
                </Button>
              </div>

              <div>
                <Image
                  src={seapLogo}
                  width={150}
                  height={74}
                  priority
                  quality={100}
                  alt="Logo do SIISP"
                />
                <Button
                  type="button"
                  onClick={() => window.open(LINK_SIISP, '_blank')}
                >
                  <Link size={20} />
                  Acessar
                </Button>
              </div>
            </ContentOptions>
          </ContentLinks>
        </Content>
      </Container>
    </>
  )
}
