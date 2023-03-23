import { NextSeo } from 'next-seo'
import { Pje } from '../pje'

import { Container } from './styles'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Pje OAB-MA"
        description="Acesse tribunais de todos os estados brasileiros."
      />
      <Container>
        <Pje />
      </Container>
    </>
  )
}
