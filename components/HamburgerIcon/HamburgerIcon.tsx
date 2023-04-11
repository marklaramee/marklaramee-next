import styles from './styles/HamburgerIcon.module.css';
import classnames from 'classnames';

export interface props {
    isOpen: boolean; 
}

const HamburgerIcon = ({isOpen}: props) => (
  <button className={classnames(styles.reset, styles.hamburgerButton)}>
    <div className={classnames(styles.wrapper, {[styles.open]: isOpen})}>
      <div className={styles.topBlock} />
      <div className={styles.middleBlock} />
      <div className={styles.bottomBlock} />
    </div>
  </button>
);

export default HamburgerIcon;
