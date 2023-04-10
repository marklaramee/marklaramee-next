import styles from './styles/Navigation.module.scss';
import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className={styles.navTop}>
            <Link href="/">HOME</Link>
            <a href="#">APPS</a>
            <a href="#">MUSIC</a>
            <div className={styles.navLevel1}>
                <span className={styles.navLevel1}>WORK</span>
                <div className={styles.navLevel2}>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;