import { MouseEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Text } from '../Text'
import { SITE_OABMA } from '@/utils/links-download'

import {
  Container,
  Content,
  ContentImage,
  ContentLinks,
  SeparationsContent,
} from './styles'

import oabLogo from '@/assets/logo-oabma.png'
import site from '@/assets/access-site.png'

export function Header() {
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
              width={80}
              height={30}
              quality={100}
              priority
              alt="Logo Pje"
            />
          </div>
          <div className="img">
            <Image
              src={oabLogo}
              width={70}
              height={30}
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
            Gerid INSS
          </Link>
        </ContentLinks>
      </Content>
    </Container>
  )
}
