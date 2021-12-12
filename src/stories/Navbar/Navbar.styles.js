// eslint-disable-next-line no-unused-vars
import React from 'react';
import css from 'styled-jsx/css';

export default css.resolve`
  .link {
    cursor: pointer;
    font-size: 18px;
    position: relative;
    white-space: nowrap;
    color: var(--color-text);
  }

  .link::before,
  .link::after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;
  }

  .link::before {
    content: '';
  }

  .link--metis {
    font-family: bely-display, sans-serif;
  }

  .link--metis::before {
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }

  .link--metis:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }
`;
