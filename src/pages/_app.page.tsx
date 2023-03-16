import type { AppProps } from 'next/app'

import { ToastProvider } from '@/lib/react-toastify'

import { globalStyles } from '../styles/global'
import '../../public/scrollbar.css'

import 'react-toastify/dist/ReactToastify.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ToastProvider />
    </QueryClientProvider>
  )
}
