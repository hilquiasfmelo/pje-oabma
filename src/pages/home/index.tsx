import { Button } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Text } from '@/components/Text'
import { Pje } from '../pje'

import { Container, Content, ContentPages, ContentOptions } from './styles'

export default function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <ContentPages>
          <Pje />
          {/* <h1>dscvsd</h1>
          <h1>dscvsd</h1>
          <h1>dscvsd</h1>
          <h1>dscvsd</h1>
          <h1>dscvsd</h1>
          <h1>dscvsd</h1>
          <h1>dscvsd</h1>
          <h1>dscvsd</h1>
          <h1>dscvsd</h1>
          <h1>dscvsd</h1>
          <h1>dscvsd</h1>
          <h1>dscvsd</h1>
          <h1>dscvsd</h1>
          <h1>dscvsd</h1>
          <h1>dscvsd</h1> */}
        </ContentPages>

        <ContentOptions>
          <Button variant="pje">
            <Text>Acessar PJE</Text>
          </Button>

          <Button>
            <Text size="lg">OAB Maranhão</Text>
          </Button>

          <Button>
            <Text size="lg">Área Criminal</Text>
          </Button>
        </ContentOptions>
      </Content>

      <Footer />
    </Container>
  )
}
