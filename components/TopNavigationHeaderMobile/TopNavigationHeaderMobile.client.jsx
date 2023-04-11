import {Link} from '@shopify/hydrogen';
import shallow from 'zustand/shallow';

import TopNavigationLogo from 'components/TopNavigation/TopNavigationLogo.client';
import HamburgerIcon from 'components/HamburgerIcon/index';
import IconButton from 'components/IconButton';
import {SearchIcon} from 'components/Icon';
import CartButton from 'components/CartButton/index.client';
import {useStore} from 'state/store';

import styles from './styles.module.css';

const TopNavigationHeaderMobile = ({showSearchIcon}) => {
  const [
    isTopNavOpen,
    isStoreLocator,
    mainDomain,
    openTopNav,
    closeTopNav,
    getStaticString,
  ] = useStore(
    (state) => [
      state.topNav.isTopNavOpen,
      state.shopConfig.isStoreLocator,
      state.shopConfig.mainDomain,
      state.topNav.openTopNav,
      state.topNav.closeTopNav,
      state.i18n.getStaticString,
    ],
    shallow,
  );

  const searchUrl = isStoreLocator ? `https://${mainDomain}/search` : '/search';
  const homeUrl = isStoreLocator ? `https://${mainDomain}` : '/';

  const handleClick = () => {
    if (isTopNavOpen) {
      closeTopNav();
    } else {
      openTopNav();
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.leftNav}>
        <IconButton
          onClick={handleClick}
          aria-expanded={isTopNavOpen}
          aria-controls="top-navigation-drawer-mobile"
          aria-label={getStaticString('topNavigation.toggleNavigation')}
        >
          <HamburgerIcon isOpen={isTopNavOpen} />
        </IconButton>
      </div>
      <TopNavigationLogo homeUrl={homeUrl} className={styles.logo} />
      <div className={styles.rightNav}>
        {showSearchIcon && (
          <Link
            to={searchUrl}
            aria-label={getStaticString('searchBar.searchPage')}
            reloadDocument
            className={styles.icon}
          >
            <SearchIcon />
          </Link>
        )}
        <CartButton analyticsId="top-nav-mobile-cart-button" />
      </div>
    </nav>
  );
};

export default TopNavigationHeaderMobile;
