import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

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
        
       <div className={styles.logo}>
        <Image
          alt='Mark Laramee'
          src='/images/mark-laramee-logo-purple-bright_720.png'
          width='1125'
          height='221'
        />
      </div>
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
