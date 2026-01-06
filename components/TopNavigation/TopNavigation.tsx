import React from 'react'
import styles from './styles/TopNavigation.module.scss';
import Link from 'next/link'
import classnames from 'classnames';

export interface props {
    isOpen: boolean; 
    navLinkClick: () => void;
}

const TopNavigation = ({isOpen, navLinkClick}: props) => {
    return (
        <div className={styles.navOuter}>
            <nav className={classnames(styles.navTop, {[styles.mobileOpen]: isOpen})}>
                <div className={styles.navLevel1}>
                    <Link href="/" onClick={navLinkClick}>HOME</Link>
                </div>
                {/* <div className={styles.navLevel1}>
                    <a href="#">APPS</a>
                </div>*/}
                <div className={styles.navLevel1}>
                    <Link href="/music" onClick={navLinkClick}>MUSIC</Link>
                </div> 
                {/* <div className={styles.navLevel1}>
                    <span className={styles.navLevel1}>WORK</span>
                    <div className={styles.navLevel2}>
                        <a href="https://www.linkedin.com/in/marklaramee" target="_blank" onClick={navLinkClick}>Linked In</a>
                        <a href="https://github.com/marklaramee" target="_blank" onClick={navLinkClick}>Github</a>
                        <a href="/content/Mark-Laramee-Resume.pdf" target="_blank" onClick={navLinkClick}>Resume - Skills</a>
                        <a href="/content/Mark-Laramee-CV.pdf" target="_blank" onClick={navLinkClick}>Resume - Accomplishments</a>
                    </div>
                </div> */}
                {/* <div className={styles.navLevel1}>
                    <Link href="/travel">Travel</Link> 
                </div> */}
                <div className={styles.navLevel1}>
                    <Link 
                        target='_blank'
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdZepdrMH7g8EG80GMUuduPMBe7Zhw5cCajtf3voNcGbI2IQQ/viewform?usp=dialog" 
                    >Contact</Link>
                </div>
            </nav> 
        </div>
    );
};

export default TopNavigation;
