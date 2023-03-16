import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Pje } from '../pje'

import { Container } from './styles'

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Pje />
      </Container>
      <Footer />
    </>
  )
}
