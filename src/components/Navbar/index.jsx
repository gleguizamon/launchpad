import React, { useState } from 'react';
import logo from '../../assets/logo-black.png';
import { Link, NavLink } from 'react-router-dom';
import { BiCart, BiSearchAlt, BiChevronDown } from 'react-icons/bi';
import {
  Button,
  Flex,
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
      <nav className="flex items-center ph3 h-nav bg-white primary">
        <Flex className="w-100">
          <Box p="2">
            <Link to="/">
              <Flex className="items-center">
                <Box overflow="auto" float="left" w="175px" h="auto">
                  <img src={logo} alt="logo" />
                </Box>
              </Flex>
            </Link>
          </Box>
          <Spacer />
          <Box className="w-30 flex items-center">
            <InputGroup>
              <Input
                type="text"
                placeholder="Search..."
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
            <Box mr="4">
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
                    <NavLink to="/category/gastronomia">Gastronomia</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="/category/estadias">Estadias</NavLink>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Button colorScheme="white" className="shadow-4">
              <BiCart className="f3 primary" />
            </Button>
          </Box>
        </Flex>
        <style jsx>{`
          .h-nav {
            height: 5rem;
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
