import Head from 'next/head'
import Image from 'next/image'
import PageTop from '@/components/PageTop/PageTop'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.construction}></div>
        <div style={{width: '100%', height: '600px', position: 'relative'}}>
          <Image
            alt='Broken TV'
            src='/images/broken-tv-4.png'
            fill
          />
      </div>
    </>
  )
}
