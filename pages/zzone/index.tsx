import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './styles/ZZone.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function ZZone() {
  return (
    <>
      <Head>
        <title>Mark Laramee: Z-Zone</title>
        <meta name="description" content="Landing page for Z-Zone application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>Z-Zone</div>
      </main>
    </>
  )
}
