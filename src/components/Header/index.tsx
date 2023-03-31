import { MouseEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { List, SignIn, SignOut } from 'phosphor-react'
import Image from 'next/image'
import Link from 'next/link'

import { Text } from '../Text'
import { Button } from '../Button'
import { SITE_OABMA } from '@/utils/links-download'
import { useAuth } from '@/hooks/useAuth'

import {
  ButtonsContainer,
  Container,
  Content,
  ContentImage,
  ContentLinks,
  SeparationsContent,
} from './styles'

import oabLogo from '@/assets/logo-oabma.png'
import site from '@/assets/access-site.png'

export function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState<string | null>(null)
  const { token, signOut } = useAuth()

  const router = useRouter()

  useEffect(() => {
    setIsAuthenticated(token)
  }, [token])

  function handleLogout() {
    signOut()

    router.push('/')
  }

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const link = event.target as HTMLAnchorElement
    const links = document.querySelectorAll('.link')

    links.forEach((link) => {
      link.classList.remove('active')
    })

    link.classList.add('active')

    // Remove a ação de selecionado dos Links caso clique em outro botao que não tenha a classe .link
    document.addEventListener('click', (event) => {
      const clickedElement = event.target as HTMLElement
      const links = document.querySelectorAll('.link')

      if (!clickedElement.classList.contains('link')) {
        links.forEach((link) => {
          if (link.classList.contains('active')) {
            link.classList.remove('active')
          }
        })
      }
    })
  }

  return (
    <Container>
      <Content>
        <ContentImage target="_blank" href={SITE_OABMA} title="Ir ao site">
          <div className="site">
            <Image
              src={site}
              width={100}
              height={50}
              quality={100}
              priority
              alt="Logo Pje"
            />
          </div>
          <div className="img">
            <Image
              src={oabLogo}
              width={90}
              height={40}
              quality={100}
              priority
              alt="Logo Pje"
            />

            <Text as="strong">MARANHÃO</Text>
          </div>
        </ContentImage>

        <ContentLinks>
          <Link href="/" className="link" onClick={handleClick}>
            Acessar Pje
          </Link>

          <SeparationsContent />

          <Link href="/crime-zone" className="link" onClick={handleClick}>
            Área Criminal
          </Link>

          <SeparationsContent />

          <Link href="/others" className="link" onClick={handleClick}>
            Outros Sistemas
          </Link>
        </ContentLinks>

        {isAuthenticated ? (
          <ButtonsContainer>
            <Button
              variant="secondary"
              type="button"
              onClick={() => router.push('/show-courts')}
            >
              <List size={15} />
              Acessar tribunais
            </Button>

            <Button
              type="button"
              onClick={handleLogout}
              title="Encerrar sessão"
              variant="danger"
            >
              <SignOut size={15} />
              Sair
            </Button>
          </ButtonsContainer>
        ) : (
          <Button
            variant="danger"
            type="button"
            onClick={() => router.push('/auth')}
          >
            <SignIn size={15} />
            Acesso Restrito
          </Button>
        )}
      </Content>
    </Container>
  )
}
