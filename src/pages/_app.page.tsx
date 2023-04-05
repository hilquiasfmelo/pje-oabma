import { QueryClientProvider } from '@tanstack/react-query'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

import { ToastProvider } from '@/lib/react-toastify'
import { queryClient } from '@/lib/react-query'
import { Header } from '@/components/Header'
import { AuthProvider } from '@/hooks/useAuth'
import { Footer } from '@/components/Footer'

import { globalStyles } from '../styles/global'
import 'react-toastify/dist/ReactToastify.css'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
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
      </AuthProvider>
    </QueryClientProvider>
  )
}
