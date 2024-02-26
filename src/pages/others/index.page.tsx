import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { Link } from 'phosphor-react'

import { Text } from '@/components/Text'
import { Button } from '@/components/Button'

import oabLogo from '@/assets/logo-oabma.png'
import geridLogo from '@/assets/logo-gerid.png'

import { LINK_FIRST_ACCESS_GERID, LINK_GERID } from '@/utils/links-download'

import {
  Container,
  Content,
  ContentLinks,
  Header,
  ContentOptions,
  ContentImage,
} from './styles'
import { AnimationContainer } from '@/styles/animation'

export default function OthersSystems() {
  return (
    <>
      <NextSeo title="Gerid INSS | Pje OAB-MA" />

      <Container>
        <AnimationContainer>
          <Content>
            <Header>
              <ContentImage>
                <Image
                  src={oabLogo}
                  width={110}
                  height={50}
                  quality={100}
                  priority
                  alt="Logo Pje"
                />

                <Text as="strong">MARANHÃO</Text>
              </ContentImage>
              <Text as="strong">
                Disponibilizamos essa área para acesso direto aos principais
                sistemas usados pela Advocacia em todo território nacional
              </Text>
            </Header>

            <ContentLinks>
              <Text as="span" size="lg">
                Existem esses disponíveis no momento, escolha qual você deseja
                acessar:
              </Text>
              <ContentOptions>
                <Image
                  src={geridLogo}
                  width={300}
                  height={80}
                  priority
                  quality={100}
                  title="O Gerid é o sistema de autenticação e gestão de usuários dos sistemas da Superintendência Nacional de Previdência Complementar (Previc)."
                  alt="Logo do GERID"
                />
                <div>
                  <Button
                    type="button"
                    onClick={() => window.open(LINK_GERID, '_blank')}
                  >
                    <Link />
                    Acessar o Gerid
                  </Button>
                  <Button
                    type="button"
                    onClick={() =>
                      window.open(LINK_FIRST_ACCESS_GERID, '_blank')
                    }
                  >
                    <Link />
                    Primeiro acesso
                  </Button>
                </div>
              </ContentOptions>
            </ContentLinks>
          </Content>
        </AnimationContainer>
      </Container>
    </>
  )
}
