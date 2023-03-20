import { useRouter } from 'next/router'
import { Lock } from 'phosphor-react'
import Image from 'next/image'
import Link from 'next/link'

import { Text } from '../Text'
import { Button } from '../Button'

import {
  Container,
  Content,
  ContentImage,
  ContentLinks,
  SeparationsContent,
} from './styles'

import oabLogo from '@/assets/logo-oabma.png'

import { SITE_OABMA } from '@/utils/links-download'

export function Header() {
  const router = useRouter()

  return (
    <Container>
      <Content>
        <ContentImage target="_blank" href={SITE_OABMA} title="Ir ao site">
          <Image
            src={oabLogo}
            width={90}
            height={40}
            quality={100}
            priority
            alt="Logo Pje"
          />

          <Text as="strong">MARANHÃO</Text>
        </ContentImage>

        <ContentLinks>
          <Link href="/">Acessar Pje</Link>

          <SeparationsContent />

          <Link href="/crime-zone">Área Criminal</Link>
        </ContentLinks>

        <Button type="button" onClick={() => router.push('/auth')}>
          <Lock size={15} />
          Acesso Restrito
        </Button>
      </Content>
    </Container>
  )
}
