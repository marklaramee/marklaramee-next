import Image from 'next/image'
import styles from './styles/PageTop.module.scss';

export default function PageTop() {
  return (
    <> 
       <div className={styles.logo}>
        <Image
          alt='Mark Laramee'
          src='/images/mark-laramee-logo-purple-bright_720.png'
          width='1125'
          height='221'
        />
      </div>
      <div className={styles.construction}></div>
      <div className={styles.test}>tisdjfglasdfgj asdlfkhjasldfgkj salfkjasz </div>
    </>
  )
}