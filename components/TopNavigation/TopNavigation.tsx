import React from 'react'
import styles from './styles/TopNavigation.module.scss';
import Link from 'next/link'
import classnames from 'classnames';

export interface props {
    isOpen: boolean; 
}

const TopNavigation = ({isOpen}: props) => {
    return (
        <nav className={classnames(styles.navTop, {[styles.mobileOpen]: isOpen})}>
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
            {/* <div className={styles.navLevel1}>
                <Link href="/travel">Travel</Link>
            </div> */}
            <div className={styles.navLevel1}>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default TopNavigation;
