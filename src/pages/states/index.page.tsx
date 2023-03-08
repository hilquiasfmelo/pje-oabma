import { Text } from '@/components/Text'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContainerForm } from './styles'
import { Button } from '@/components/Button'

export default function States() {
  return (
    <>
      <Header />
      <ContainerForm as="form">
        <Text>Nome do estado</Text>
        <input type="text" placeholder="Digite o nome do estado" />
        <Button>Cadastrar</Button>
      </ContainerForm>
      <Footer />
    </>
  )
}
