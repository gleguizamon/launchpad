import React, { useState } from 'react';
import logo from '../../assets/darkLogo.png';
import isologo from '../../assets/darkLogo-small.png';
import DropdownMenu from '../DropdownMenu';
import CartWidget from '../CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { BiSearchAlt, BiChevronDown } from 'react-icons/bi';
import {
  Button,
  Box,
  InputGroup,
  Input,
  InputRightElement,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';

export default function Navbar() {
  const [search, setSearch] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    console.warn(search);
  };

  return (
    <>
      <nav className="flex items-center ph3 h-nav bg-white primary overflow-hidden">
        <Box className="w-100 mw9 center dn flex-l">
          <Box className="flex items-center w-20">
            <Link to="/">
              <Box className="overflow-auto fl h-auto" w="175px">
                <img src={logo} alt="logo" />
              </Box>
            </Link>
          </Box>
          <Spacer />
          <Box className="w-30 flex items-center">
            <InputGroup>
              <Input
                className="pr-search"
                type="text"
                placeholder="Buscar..."
                value={search}
                focusBorderColor="black"
                isInvalid
                errorBorderColor="black"
                onChange={e => setSearch(e.target.value)}
                onSubmit={handleSubmit}
              />
              <InputRightElement width="4.5rem" className="bl b--black">
                <Button
                  h="1.75rem"
                  size="sm"
                  backgroundColor="transparent"
                  onClick={e => {
                    alert('clicked', e.target.value);
                  }}
                >
                  <BiSearchAlt className="f3" />
                </Button>
              </InputRightElement>
            </InputGroup>
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
                    <NavLink to="/">Todas</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="/category/aventura">Aventura</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="/category/gastronomia">Gastronomía</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="/category/estadias">Estadías</NavLink>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <CartWidget />
          </Box>
        </Box>

        <Box className="w-100 mw9 center flex justify-between dn-l">
          <DropdownMenu />
          <Link to="/">
            <Box className="flex justify-center overflow-auto h-auto" w="175px">
              <img className="w-20" src={isologo} alt="logo" />
            </Box>
          </Link>
          {/* Acá va el cartWidget */}
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
      {/* <ButtonGroup className="primary" size="sm" isAttached variant="outline">
        <Button mr="-px">Save</Button>
        <IconButton aria-label="Cart" icon={<BiCart className="f3 primary pointer" />} />
      </ButtonGroup> */}
    </>
  );
}
