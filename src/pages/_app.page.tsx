import type { AppProps } from 'next/app'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ToastProvider } from '@/lib/react-toastify'

import { globalStyles } from '../styles/global'

import 'react-toastify/dist/ReactToastify.css'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ToastProvider />
    </>
  )
}
