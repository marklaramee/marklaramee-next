import Head from 'next/head'
import Image from 'next/image'
import PageTop from '@/components/pageTop/PageTop'
import { Roboto } from 'next/font/google'
import styles from '@/styles/Home.module.css'


// import 'https://fonts.googleapis.com/css?family=Roboto:400,700';

const roboto = Roboto({
  weight: '400',
  preload: false,
})

export default function Home() {
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
        <div className={styles.construction}></div>
        <div style={{width: '100%', height: '600px', position: 'relative'}}>
          <Image
            alt='Broken TV'
            src='/images/broken-tv-4.png'
            fill
          />
        </div>
      </main>
    </>
  )
}
