// @flow strict
// eslint-disable-next-line no-unused-vars
import React from 'react';
import css from 'styled-jsx/css';

export default css.resolve`
  .div:focus {
    box-shadow: 0 2px 4px 0 #63668030;
  }
  .div:hover {
    background-color: #ff9700;
    color: #131415;
  }
  .div:active {
    background-color: #ff9700;
    color: #131415;
  }
  .bg-primary {
    background-color: #ff9700;
  }
`;
