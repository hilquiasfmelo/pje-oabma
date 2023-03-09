import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { Pje } from '../pje'

import { Container, Content, ContentPages, ContentOptions } from './styles'

export default function Home() {
  return (
    <Container>
      <Content>
        <ContentPages>
          <Pje />
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
    </Container>
  )
}
