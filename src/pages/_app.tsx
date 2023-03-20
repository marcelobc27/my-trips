import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '@/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - BoilerPlate</title>
        <link rel='shortcut icon' href='/favicon.ico'/>
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='grey'/>
        <meta
          name='description'
          content='A simple project'
        />
      </Head>
      <GlobalStyles/>
      <Component {...pageProps} />
    </>
  )
}
