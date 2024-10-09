import { AnimationContainer } from '@/styles/animation'
import { NextSeo } from 'next-seo'
import { Pje } from '../pje/static'

import { Container, ContentWarning } from './styles'
import { IndicatorFooter } from '@/components/IndicatorFooter'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Pje OAB-MA"
        description="Acesse tribunais de todos os estados brasileiros."
      />
      <IndicatorFooter />

      <Container>
        <ContentWarning>
          <div>
            <strong>Atenção: Plataforma será descontinuada</strong>
            <span>
              A partir de <u>18/10/2024</u>, a plataforma atual será desativada.{' '}
              <br /> Para continuar acessando nossos serviços, utilize o novo
              pJe OAB:
            </span>
          </div>
          <a href="https://pje.oabma.org.br" target="_blank" rel="noreferrer">
            <Button>Acessar novo pJe OAB</Button>
          </a>

          <p>Gerência de Tecnologia da OAB-MA</p>
        </ContentWarning>

        <AnimationContainer>
          <Pje />
        </AnimationContainer>
      </Container>
    </>
  )
}
