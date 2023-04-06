import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../ZZone.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function ZZone() {
  return (
    <>
      <Head>
        <title>Mark Laramee: Z-Zone Support</title>
        <meta name="description" content="Landing page for Z-Zone application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>For support, pkease contact me at bookmarksbrowserexplorer address using google mail.</div>
      </main>
    </>
  )
}
