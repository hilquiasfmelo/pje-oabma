import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { Link } from 'phosphor-react'

import { Text } from '@/components/Text'
import { Button } from '@/components/Button'

import oabLogo from '@/assets/logo-oabma.png'
import geridLogo from '@/assets/logo-gerid.png'

import { LINK_GERID, SITE_OABMA } from '@/utils/links-download'

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
      <NextSeo title="Outros sistemas | Pje OAB-MA" />

      <Container>
        <AnimationContainer>
          <Content>
            <Header>
              <ContentImage
                target="_blank"
                href={SITE_OABMA}
                title="Ir ao site"
              >
                <Image
                  src={oabLogo}
                  width={90}
                  height={40}
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
                <div>
                  <Image
                    src={geridLogo}
                    width={200}
                    height={80}
                    priority
                    quality={100}
                    title="O Gerid é o sistema de autenticação e gestão de usuários dos sistemas da Superintendência Nacional de Previdência Complementar (Previc)."
                    alt="Logo do GERID"
                  />
                  <Button
                    type="button"
                    onClick={() => window.open(LINK_GERID, '_blank')}
                  >
                    <Link size={20} />
                    Acessar
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
