import styles from './styles/HamburgerIcon.module.css';
import classnames from 'classnames';
import PropTypes from "prop-types";

export interface props {
    isOpen: boolean; 
    hamburgerClick: () => void;
}

const HamburgerIcon = ({isOpen, hamburgerClick}: props) => {

  return (
    <button className={classnames(styles.reset, styles.hamburgerButton)} onClick={hamburgerClick}>
      <div className={classnames(styles.wrapper, {[styles.open]: isOpen})}>
        <div className={styles.topBlock} />
        <div className={styles.middleBlock} />
        <div className={styles.bottomBlock} />
      </div>
    </button>
  );
};

HamburgerIcon.propTypes = {
  isOpen: PropTypes.bool,
  hamburgerClick: PropTypes.func.isRequired,
}

export default HamburgerIcon;
