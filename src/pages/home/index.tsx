import { AnimationContainer } from '@/styles/animation'
import { NextSeo } from 'next-seo'
import { Pje } from '../pje/static'

import { Container } from './styles'
import { IndicatorFooter } from '@/components/IndicatorFooter'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Pje OAB-MA"
        description="Acesse tribunais de todos os estados brasileiros."
      />
      <IndicatorFooter />

      <Container>
        <AnimationContainer>
          <Pje />
        </AnimationContainer>
      </Container>
    </>
  )
}
