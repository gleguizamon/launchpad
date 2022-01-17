import React from 'react';
import logo from '../../assets/darkLogo.png';
import isologo from '../../assets/darkLogo-small.png';
import DropdownMenu from '../DropdownMenu';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';
import { Button, Box, Spacer, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <>
      <nav className="center flex items-center ph3 h-nav bg-white primary overflow-hidden">
        <Box className="w-100 center mw9 dn flex-l">
          <Box className="flex items-center w-20">
            <Link to="/">
              <Box className="overflow-auto fl h-auto" w="175px">
                <img src={logo} alt="logo" />
              </Box>
            </Link>
          </Box>
          <Spacer />
          <Box className="flex items-center">
            <Box className="mr2">
              <Menu>
                <MenuButton
                  variant="solid"
                  bg="white"
                  className="primary shadow-4"
                  as={Button}
                  rightIcon={<BiChevronDown className="f3 pa0 ma0 primary" />}
                >
                  Categorías
                </MenuButton>
                <MenuList color="black" bg="white">
                  <MenuItem>
                    <Link to="/">Todas</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/category/aventura">Aventura</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/category/gastronomia">Gastronomía</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/category/estadias">Estadías</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <CartWidget />
          </Box>
        </Box>

        <Box className="w-100 center mw9 flex justify-between dn-l">
          <DropdownMenu />
          <Link to="/">
            <Box className="flex justify-center overflow-auto h-auto" w="175px">
              <img className="w-20" src={isologo} alt="logo" />
            </Box>
          </Link>
          {/* Acá va el cartWidget para mobile */}
        </Box>

        <style jsx>{`
          .h-nav {
            height: 5rem;
          }
          .pr-search {
            padding-right: 70px;
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;
