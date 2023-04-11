import {expect, describe, beforeEach, it} from 'vitest';
import renderer from 'react-test-renderer';

import HamburgerIcon from './HamburgerIcon.client';

describe('Component:HamburgerIcon', () => {
  let subject;

  describe(':snapshots', () => {
    describe('when isOpen = true', () => {
      beforeEach(() => {
        subject = renderer.create(<HamburgerIcon isOpen />).toJSON();
      });

      it('renders snapshot', () => {
        expect(subject).toMatchSnapshot();
      });
    });

    describe('when isOpen = false', () => {
      beforeEach(() => {
        subject = renderer.create(<HamburgerIcon isOpen={false} />).toJSON();
      });

      it('renders snapshot', () => {
        expect(subject).toMatchSnapshot();
      });
    });
  });
});
