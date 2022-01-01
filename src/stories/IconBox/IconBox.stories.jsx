import React from 'react';
import IconBox, { IconBox as IconBoxComponent } from './IconBox.component';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { BiHeart, BiBell } from 'react-icons/bi';

export default {
  title: 'launchpad/IconBox',
  component: IconBoxComponent,
  decorators: [withKnobs]
};

export const withHeartIcon = () => (
  <IconBox disabled={boolean('disabled', true)} type="submit">
    <BiHeart />
  </IconBox>
);

export const withBellIcon = () => (
  <IconBox disabled={boolean('disabled', true)} type="submit">
    <BiBell />
  </IconBox>
);
