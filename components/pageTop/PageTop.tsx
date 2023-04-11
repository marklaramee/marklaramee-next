import TopNavigation from '../TopNavigation/TopNavigation';
import styles from './styles/PageTop.module.scss';

export default function PageTop() {
  return (
    <div className={styles.container}> 
      <img
        alt='Mark Laramee'
        src='/images/mark-laramee-logo-purple-bright_720.png'
        className={styles.logo}
      />
      <TopNavigation />
    </div>
  )
}