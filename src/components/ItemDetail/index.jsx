import React from 'react';
import { useCartContext } from '../../context/CartContext';
import {
  Image,
  Box,
  Flex,
  useToast,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';

const ItemDetail = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addItem } = useCartContext();
  const toast = useToast();

  const onAdd = quantity => {
    addItem(item, quantity);
    toast({
      title: 'Agregado al carrito',
      position: 'bottom-right',
      description: `${item.name} agregado al carrito`,
      status: 'success',
      duration: 1500
    });
    onOpen();
  };

  return (
    <>
      <Flex className="w-100 justify-center">
        <Flex className="flex-column mv5 pv4 h-auto ba b--black bg-dark br4 w-80 items-center justify-around">
          <Box className="w-50">
            <Image className="fit w-100 h-100 br4 shadow-5" src={item.image} alt={item.name} />
          </Box>
          <Flex className="w-50 flex-column items-center white">
            <h1 className="b f3 mt2">{item.name}</h1>
            <h2 className="f5 mt2">{item.description}</h2>
            <span className="b f5 mt2">{item.stock ? `$${item.price}` : ''}</span>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Producto añadido al carrito</ModalHeader>
                <ModalCloseButton />
                <ModalBody className="w-100 h-100 center flex justify-center">
                  <p className="f5">¿Desea seguir comprando?</p>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Si
                  </Button>
                  <Link to="/cart">
                    <Button>No</Button>
                  </Link>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default ItemDetail;
