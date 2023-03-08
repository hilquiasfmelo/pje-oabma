import { Text } from '@/components/Text'
import { Container, Content, Header, ContentOptions } from './styles'

import direitoLogo from '@/assets/direito-logo.png'
import Image from 'next/image'
import { Button } from '@/components/Button'

export function Pje() {
  return (
    <Container>
      <Header>
        <Image src={direitoLogo} width={120} alt="Logo do Direito" />
        <Text as="strong" size="5xl">
          O PJE está disponível em todo o Brasil, fique a vontade para usá-lo em
          qualquer estado!
        </Text>
      </Header>

      <Content>
        <Text as="span" size="2xl">
          Escolha qual <strong>Estado</strong> e <strong>Tribunal</strong> você
          deseja acessar:
        </Text>
        <ContentOptions>
          <select>
            <option defaultValue="">Defina um estado...</option>
            <option value="MA">MARANHÃO</option>
            <option value="RJ">RIO DE JANEIRO</option>
            <option value="AM">AMAZONAS</option>
          </select>

          <select>
            <option defaultValue="">Defina um tribunal...</option>
            <option value="">TJMA - 1° GRAU</option>
            <option value="">TJMA - 2° GRAU</option>
            <option value="">TRT16 - 1° GRAU</option>
          </select>
        </ContentOptions>
        <Button>
          <Text as="strong" size="lg">
            Acessar Tribunal
          </Text>
        </Button>
      </Content>
    </Container>
  )
}
