// @flow strict
import React from 'react';
import css from './Navbar.styles';
import logo from './logo.png';

type Props = {
  /**
   * Override or extend the styles applied to the component.
   *
   * @type {string}
   */
  items: string,
  /**
   *If true, the button will have the ripple effect on click
   *
   * @type {boolean}
   */
  underline: boolean
};

export function Navbar({ items, underline }: Props) {
  return (
    <div className="h3 b--black ba">
      <ul className="flex items-center justify-around h-100 list pa0 mv0">
        <li>
          <img className="" src={logo} alt="" />
        </li>
        <li className="link link--metis">
          <a href="/">Home</a>
        </li>
        <li className="link link--metis">
          <a href="/experiences">Experiencias</a>
        </li>
        <li className="link link--metis">
          <a href="/contact">Contacto</a>
        </li>
        <li className="link link--metis">
          <a href="/about-us">Sobre Nosotros</a>
        </li>
      </ul>
      {css.styles}
    </div>
  );
}

export default Navbar;
