import Image from 'next/image'

import { Container } from '../styles/404'

import pageNotFound from '../assets/404.png'
import Link from 'next/link'

export default function PageNotFound() {
  return (
    <Container>
      <Image
        src={pageNotFound}
        width={550}
        height={400}
        quality={100}
        priority
        alt="Página não encontrada"
      />
      <strong>Ops! Página não encontrada...</strong>
      <Link href="/" type="button">
        Voltar para o Início
      </Link>
    </Container>
  )
}
