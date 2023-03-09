import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { Container, Content } from "./styles";

export default function States() {
    return (
        <Container>
            <Content>
                <label>
                    <Text as="strong">Nome do Estado</Text>
                    <input type="text" placeholder="Digite o nome do estado" required />
                </label>

                <label>
                    <Text as="strong">Sigla do Estado</Text>
                    <input type="text" placeholder="Digite o nome do estado" required />
                </label>

                <label>
                    <Button>Cadastrar</Button>
                </label>
            </Content>
        </Container>
    )
}