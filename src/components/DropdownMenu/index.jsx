import React from 'react';
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Flex,
  Input
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';

const DropdownMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button colorScheme="white" className="shadow-4" onClick={onOpen}>
        <BiMenu className="f3 primary" />
      </Button>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose} finalFocusRef={btnRef} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            Categorías
            <DrawerCloseButton className="mt2" />
          </DrawerHeader>
          <DrawerBody>
            <Input id="search" className="mt3" placeholder="Buscar..." />
            <Flex className="flex-column f2 tl mt3">
              <NavLink to="/" onClick={onClose} className="mv1 b">
                Todas
              </NavLink>
              <NavLink to="/category/adventure" onClick={onClose} className="mv1 b">
                Aventura
              </NavLink>
              <NavLink to="/category/gastronomy" onClick={onClose} className="mv1 b">
                Gastronomía
              </NavLink>
              <NavLink to="/category/stays" onClick={onClose} className="mv1 b">
                Estadías
              </NavLink>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DropdownMenu;
