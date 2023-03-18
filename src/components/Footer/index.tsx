import Image from 'next/image'
import Link from 'next/link'

import { Text } from '../Text'

import {
  About,
  Contacts,
  Container,
  ContentImage,
  ContentPrimary,
  ProgramsLinks,
} from './styles'

import {
  ArrowElbowDownRight,
  Envelope,
  Link as IconLink,
  MapPinLine,
  Phone,
} from 'phosphor-react'

import {
  LINK_CERTISIGN,
  LINK_JAVA,
  LINK_PJE,
  LINK_SAFESIGN,
} from '@/utils/links-downloads'

import oabLogo from '@/assets/logo-oabma.png'

export function Footer() {
  return (
    <Container>
      <ContentPrimary>
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
          Links para download dos programas para usar o PJE <br />
          Atenção: Disponível somente para sistemas com arquitetura x64. <br />
        </span>

        <ProgramsLinks>
          <Link href={LINK_JAVA}>
            <IconLink size={20} />
            Download Java SE
          </Link>
          <Link href={LINK_SAFESIGN}>
            <IconLink size={20} />
            Driver Token GD-Safesign
          </Link>
          <Link href={LINK_CERTISIGN}>
            <IconLink size={20} />
            Driver Token Certisign
          </Link>
          <Link href={LINK_PJE}>
            <IconLink size={20} />
            Assinador PjeOffice
          </Link>
        </ProgramsLinks>
      </ContentPrimary>

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
          <Envelope />
          <Text as="span">informatica@oabma.org.br</Text>
        </div>
      </Contacts>

      <About>
        <h3>Sobre</h3>
        <h5>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          laboriosam earum magni? Iste commodi unde sapiente quisquam voluptate
          error. Cumque odio soluta qui quae nam id voluptatem, minima
          accusantium asperiores!
        </h5>
      </About>
    </Container>
  )
}
