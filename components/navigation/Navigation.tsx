import styles from './styles/Navigation.module.scss';
import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className={styles.navTop}>
            <div className={styles.navLevel1}>
                <Link href="/">HOME</Link>
            </div>
            {/* <div className={styles.navLevel1}>
                <a href="#">APPS</a>
            </div>
            <div className={styles.navLevel1}>
                <a href="#">MUSIC</a>
            </div> */}
            <div className={styles.navLevel1}>
                <span className={styles.navLevel1}>WORK</span>
                <div className={styles.navLevel2}>
                    <a href="https://www.linkedin.com/in/marklaramee" target="_blank">Linked In</a>
                    <a href="https://github.com/marklaramee" target="_blank">Github</a>
                    <a href="/content/Mark-Laramee-Resume.pdf" target="_blank">Resume - Skills</a>
                    <a href="/content/Mark-Laramee-CV.pdf" target="_blank">Resume - Accomplishments</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;