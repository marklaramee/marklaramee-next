import Head from 'next/head'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm/ContactForm';
import styles from '../ZZone.module.css'

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
        <ContactForm />
      </main>
    </>
  )
}
