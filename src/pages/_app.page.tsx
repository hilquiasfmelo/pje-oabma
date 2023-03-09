import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import type { AppProps } from 'next/app'

import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
