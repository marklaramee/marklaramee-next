import React from 'react'
import { useState } from 'react';
import TopNavigation from '../TopNavigation/TopNavigation';
import HamburgerIcon from '@/components/HamburgerIcon/HamburgerIcon';
import styles from './styles/SiteTop.module.scss';

export default function SiteTop() {
  const [isTopNavOpen, setIsTopNavOpen] = useState(false);

  const handleClick = () => {
      setIsTopNavOpen(!isTopNavOpen);
  };

  return (
    <div className={styles.container}> 
      <div className={styles.topBar}>
        <HamburgerIcon isOpen={isTopNavOpen} hamburgerClick={handleClick} />
        <img
          alt='Mark Laramee'
          src='/images/mark-laramee-logo-purple-bright_720.png'
          className={styles.logo}
        />
      </div>
      <TopNavigation isOpen={isTopNavOpen} navLinkClick={handleClick} />
    </div>
  )
}