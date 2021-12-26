import React from 'react';
import logo from '../../assets/logo.png';
import { BiMenu, BiCart } from 'react-icons/bi';

const navItems = [
  { name: 'Experiencias', path: '/experiences' },
  { name: 'Contacto', path: '/contact' },
  { name: 'Acerca', path: '/about' }
];

const Navbar = () => (
  <nav className="h3 flex w-100 ph3 mv3">
    <div className="w-15">
      <BiMenu className="f3 items-center h-100 launchpad" />
    </div>
    <div className="w-15">
      <img className="cover" src={logo} alt="logo" />
    </div>

    <div className="w-40 flex items-center">
      <div className="center br4 w-100 h2 bg-white">
        <div className="center br4 h2 bg-launchpad fr w-search" />
      </div>
    </div>

    <div className="w-30 flex items-center justify-between ph2">
      <ul className="w-90 flex justify-around">
        {navItems.map(item => (
          <li key={item.name} className="flex items-center">
            <a href={item.path} className="link pointer launchpad">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <a href="/cart">
        <BiCart className="f3 launchpad pointer" />
      </a>
    </div>
    <style jsx>{`
      .w-search {
        width: 15%;
      }
    `}</style>
  </nav>
);

export default Navbar;
