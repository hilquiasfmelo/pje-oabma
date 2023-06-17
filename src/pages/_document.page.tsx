import { getCssText } from '@/styles'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />

        {/* <title>Pje OAB-MA</title> */}
        <meta name="title" content="Pje OAB-MA" />
        <meta
          name="description"
          content="Acesse tribunais de todos os estados brasileiros."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pje-oabma.vercel.app/" />
        <meta property="og:title" content="Pje OAB-MA" />
        <meta
          property="og:description"
          content="Acesse tribunais de todos os estados brasileiros."
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://pje-oabma.vercel.app/" />
        <meta property="twitter:title" content="Pje OAB-MA" />
        <meta
          property="twitter:description"
          content="Acesse tribunais de todos os estados brasileiros."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
