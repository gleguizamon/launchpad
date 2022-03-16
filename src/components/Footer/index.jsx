import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => (
  <>
    <footer className="w-100">
      <hr />
      <div className="flex justify-between h3 center mw8 items-center">
        <h3>
          Sitio web desarrollado por{' '}
          <u>
            <a href="https://github.com/gleguizamon">Gonzalo Leguizamon</a>
          </u>
        </h3>
        <a href="https://github.com/gleguizamon">
          <FaGithub className="f2" />
        </a>
      </div>
    </footer>
  </>
);

export default Footer;
