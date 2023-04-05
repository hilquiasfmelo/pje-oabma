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
  ContentImage,
  SeparationsContent,
} from './styles'
import { AnimationContainer } from '@/styles/animation'

export default function CrimeZone() {
  return (
    <>
      <NextSeo title="Área Criminal | Pje OAB-MA" />

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
                    title="O Sistema Eletrônico de Execução Unificado – SEEU é um sistema informatizado, bastante fácil e intuitivo, gerenciado pelo Conselho Nacional de Justiça - CNJ e tem como objetivo suprir a integralidade das demandas de procedimentos exigidas para processamento e tramitação de processos de Execução Penal."
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

                <SeparationsContent />

                <div>
                  <Image
                    src={seapLogo}
                    width={150}
                    height={70}
                    priority
                    quality={100}
                    title="Sistema gerenciado pelo Poder Executivo do Maranhão (Secretaria de Justiça e Administração Penitenciária – SEJAP). É utilizado para pesquisar os presos no sistema prisional do Estado do Maranhão."
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
        </AnimationContainer>
      </Container>
    </>
  )
}
