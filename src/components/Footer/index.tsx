import Image from 'next/image'
import Link from 'next/link'

import { Text } from '../Text'

import {
  About,
  Contacts,
  Container,
  ContentImage,
  ContainerLinks,
  ContentLinks,
  ProgramsLinks,
} from './styles'

import {
  ArrowElbowDownRight,
  ArrowFatLineDown,
  Download,
  Envelope,
  MapPinLine,
  Phone,
  WhatsappLogo,
} from 'phosphor-react'

import {
  LINK_ANYDESK,
  LINK_CERTISIGN,
  LINK_JAVA,
  LINK_PJE,
  LINK_PJE_PRO,
  LINK_SAFESIGN,
} from '@/utils/links-download'

import oabLogo from '@/assets/logo-oabma.png'
import tkSafe from '@/assets/tk-safe.png'
import tkCert from '@/assets/tk-cert.png'

export function Footer() {
  return (
    <Container id="footer">
      <ContainerLinks>
        <ContentLinks>
          <ContentImage>
            <Image
              src={oabLogo}
              width={70}
              height={30}
              quality={100}
              priority
              alt="Logo Pje"
            />

            <Text as="strong">MARANHÃO</Text>
          </ContentImage>

          <span>
            <ArrowElbowDownRight size={25} />
            Downloads dos programas para acessar o PJE no sistema Windows:
          </span>

          <ProgramsLinks>
            <Link href={LINK_JAVA}>
              <ArrowFatLineDown size={15} />
              Java SE
            </Link>
            <Link href={LINK_CERTISIGN}>
              <ArrowFatLineDown size={15} />
              Driver Token SafeNet
              <Image
                src={tkCert}
                width={130}
                height={100}
                quality={100}
                priority={true}
                alt="Token Certisign"
              />
            </Link>

            <Link href={LINK_SAFESIGN}>
              <ArrowFatLineDown size={15} />
              Driver Token GD-Safesign
              <Image
                src={tkSafe}
                width={130}
                height={100}
                quality={100}
                priority={true}
                alt="Token Safesign"
              />
            </Link>

            <Link href={LINK_PJE_PRO}>
              <ArrowFatLineDown size={15} />
              Assinador PjeOffice PRO
            </Link>

            <Link href={LINK_PJE}>
              <ArrowFatLineDown size={15} />
              Assinador PjeOffice
            </Link>
          </ProgramsLinks>
        </ContentLinks>

        <ContentLinks>
          <span>
            <Download size={25} />
            Deseja acesso remoto? Baixe aqui o Anydesk
          </span>

          <ProgramsLinks>
            <Link href={LINK_ANYDESK} target="_blank">
              <ArrowFatLineDown size={17} />
              Download Anydesk
            </Link>
          </ProgramsLinks>
        </ContentLinks>
      </ContainerLinks>

      <Contacts>
        <div>
          <MapPinLine />
          <Text as="span">
            Rua Dr. Pedro Emanoel de Oliveira, Nº01 <br />
            CEP 65076-908 - Calhau - São Luís, MA - Brasil
          </Text>
        </div>

        <div>
          <Phone />
          <Text as="span">(98) 2107-5412</Text>
        </div>
        <div>
          <WhatsappLogo />
          <Text as="span">(98) 99145-4667</Text>
        </div>

        <div>
          <Envelope />
          <Text as="span">informatica@oabma.org.br</Text>
        </div>
      </Contacts>

      <About>
        <strong>Sobre este site</strong>
        <span>
          Desenvolvido pelo setor de T.I da OAB-MA para ajudar os advogados a
          acessarem rapidamente os tribunais com acesso ao PJE em todo o Brasil.
          Nós fornecemos acesso direto aos links para os sites dos tribunais,
          mas não somos responsáveis por links de tribunais offline. Qualquer
          problema com o acesso deve ser resolvido diretamente com o tribunal em
          questão.
        </span>
      </About>
    </Container>
  )
}
