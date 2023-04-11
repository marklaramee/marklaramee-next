import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.css';

const HamburgerIcon = ({isOpen}) => (
  <div className={classNames(styles.wrapper, {[styles.open]: isOpen})}>
    <div className={styles.topBlock} />
    <div className={styles.middleBlock} />
    <div className={styles.bottomBlock} />
  </div>
);

HamburgerIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default HamburgerIcon;
