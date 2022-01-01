import { addons } from '@storybook/addons';
import launchpadTheme from './launchpadTheme';
import './global.css';

addons.setConfig({
  theme: launchpadTheme,
  showRoots: true
});
