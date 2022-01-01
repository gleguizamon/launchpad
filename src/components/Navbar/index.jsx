import React, { useState } from 'react';
import logo from '../../assets/logo.png';
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
      <nav className="w-100 ph3 mv3 bg-black white">
        <Flex>
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
                focusBorderColor="white"
                onChange={e => setSearch(e.target.value)}
                onSubmit={handleSubmit}
              />
              <InputRightElement width="4.5rem" className="bl b--white">
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
                  bg="teal"
                  color="white"
                  as={Button}
                  rightIcon={<BiChevronDown className="f3 pa0 ma0" />}
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
                    <NavLink to="/category/entretenimiento">Entretenimiento</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="/category/experiencias">Experiencias</NavLink>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Button colorScheme="teal">
              <BiCart className="f3" />
            </Button>
          </Box>
        </Flex>
      </nav>
      {/* <ButtonGroup className="primary" size="sm" isAttached variant="outline">
        <Button mr="-px">Save</Button>
        <IconButton aria-label="Cart" icon={<BiCart className="f3 primary pointer" />} />
      </ButtonGroup> */}
    </>
  );
}
