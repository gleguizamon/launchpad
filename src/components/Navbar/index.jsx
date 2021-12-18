import React from 'react';
import logo from '../../assets/logo.png';
import './styles.css';

export const Navbar = () => (
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
  </div>
);
