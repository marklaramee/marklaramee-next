# HamburgerButton

This component is an hamburger button.

## Sample Usage

```js
import HamburgerButton from 'components/HamburgerButton';

() => <HamburgerButton />;
```

The example above renders a hamburger button.

The `isOpen` prop will determine the visual state of the button (hamburger when `isOpen` is false, and an `X` when `isOpen` is true):

```js
import HamburgerButton from 'components/HamburgerButton';

() => <HamburgerButton isOpen={navigationIsOpen} />;
```

Any props you pass it will be applied to the underlying `button` tag:

```js
import HamburgerButton from 'components/HamburgerButton';

() => <HamburgerButton onClick={doSomething} aria-label="Toggle navigation" />;
```
