import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Image from 'next/image'
import PageTop from '@/components/PageTop/PageTop'
import styles from '@/styles/Home.module.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mark Laramee: Home</title>
        <meta name="description" content="Mark Laramee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <PageTop />
        <Component {...pageProps} />
      </main>
    </>
  )
}
