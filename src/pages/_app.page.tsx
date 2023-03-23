import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import { ToastProvider } from '@/lib/react-toastify'
import { queryClient } from '@/lib/react-query'

import { globalStyles } from '../styles/global'
import '../../public/scrollbar.css'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DefaultSeo } from 'next-seo'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://pje-oabma.vercel.app',
          siteName: 'Pje OAB-MA',
        }}
      />
      <Component {...pageProps} />
      <Footer />
      <ToastProvider />
    </QueryClientProvider>
  )
}
