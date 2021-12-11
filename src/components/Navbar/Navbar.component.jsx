import React from 'react';
import logo from './logo.png';

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
    <style jsx>{`
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
    `}</style>
  </div>
);
