import Image from 'next/image'
import TopNavigation from '../TopNavigation/TopNavigation';
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
      <TopNavigation />
    </>
  )
}