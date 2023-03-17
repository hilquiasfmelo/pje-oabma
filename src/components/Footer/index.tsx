import Image from 'next/image';

import { Text } from '../Text';

import {
  About,
  Contacts,
  Container,
  ContentImage,
  ContentPrimary,
  ProgramsLinks,
} from './styles';

import oabLogo from '@/assets/logo-oabma.png';
import {
  ArrowElbowDownRight,
  Envelope,
  Link,
  MapPinLine,
  Phone,
} from 'phosphor-react';

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
          Sistema Operacional: Windows
        </span>

        <ProgramsLinks>
          <dd
            onClick={() =>
              window.location.assign(
                'https://javadl.oracle.com/webapps/download/AutoDL?BundleId=247947_0ae14417abb444ebb02b9815e2103550'
              )
            }
          >
            <Link size={20} />
            Download Java SE
          </dd>
          <dd>
            <Link size={20} />
            Driver GB SafeSign
          </dd>
          <dd>
            <Link size={20} />
            Driver Token Certisign
          </dd>
          <dd>
            <Link size={20} />
            Assinador PjeOffice
          </dd>
        </ProgramsLinks>
      </ContentPrimary>

      <Contacts>
        <div>
          <MapPinLine />
          <Text as="span">
            Rua Dr. Pedro Emanoel de Oliveira, <br /> Nº01 - CEP 65076-908 -
            Calhau - São Luís, MA - Brasil
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
  );
}
