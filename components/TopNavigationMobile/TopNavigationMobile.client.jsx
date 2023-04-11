import {useState} from 'react';
import PropTypes from 'prop-types';
import shallow from 'zustand/shallow';

import TopNavigationHeaderMobile from 'components/TopNavigationHeaderMobile/index.client';
import TopNavigationDrawerMobile from 'components/TopNavigationDrawerMobile/index.client';
import TopNavigationSubNavigationMobile from 'components/TopNavigationSubNavigationMobile/index.client';

import {
  PaneManager,
  Pane,
  POSITIONS as PANE_POSITIONS,
} from 'components/TopNavigationPaneManager/index.client';
import {useStore} from 'state/store';

const TopNavigationMobile = ({navigationNodes, showSearchIcon}) => {
  const [activeNodeIndex, isTopNavOpen] = useStore(
    (state) => [state.topNav.activeNodeIndex, state.topNav.isTopNavOpen],
    shallow,
  );

  const [l1Node, setL1Node] = useState(null);
  const [l2Node, setL2Node] = useState(null);

  let l0PanePosition = PANE_POSITIONS.RIGHT;
  let l1PanePosition = PANE_POSITIONS.RIGHT;
  let l2PanePosition = PANE_POSITIONS.RIGHT;

  if (activeNodeIndex === 0) {
    l0PanePosition = PANE_POSITIONS.CENTER;
  }

  if (activeNodeIndex === 1) {
    l0PanePosition = PANE_POSITIONS.LEFT;
    l1PanePosition = PANE_POSITIONS.CENTER;
  }

  if (activeNodeIndex === 2) {
    l0PanePosition = PANE_POSITIONS.LEFT;
    l1PanePosition = PANE_POSITIONS.LEFT;
    l2PanePosition = PANE_POSITIONS.CENTER;
  }

  return (
    <nav id="top-navigation-mobile" data-analytics-id="top-navigation-mobile">
      <TopNavigationHeaderMobile showSearchIcon={showSearchIcon} />
      <TopNavigationDrawerMobile isOpen={isTopNavOpen}>
        {isTopNavOpen && (
          <PaneManager>
            <Pane position={l0PanePosition}>
              <TopNavigationSubNavigationMobile
                activeNode={navigationNodes}
                parentNode={null}
                setCurrentTopNavigationNode={setL1Node}
              />
            </Pane>
            <Pane position={l1PanePosition}>
              <TopNavigationSubNavigationMobile
                activeNode={l1Node}
                parentNode={navigationNodes}
                setCurrentTopNavigationNode={setL2Node}
              />
            </Pane>
            <Pane position={l2PanePosition}>
              <TopNavigationSubNavigationMobile
                activeNode={l2Node}
                parentNode={l1Node}
              />
            </Pane>
          </PaneManager>
        )}
      </TopNavigationDrawerMobile>
    </nav>
  );
};

TopNavigationMobile.propTypes = {
  navigationNodes: PropTypes.shape({}).isRequired,
};

export default TopNavigationMobile;
