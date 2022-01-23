import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Image, Box, Flex, useToast, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';

const ItemDetail = ({ item }) => {
  const [showItemCount, setShowItemCount] = useState(true);
  const { addItem } = useCartContext();
  const toast = useToast();

  const onAdd = quantity => {
    // test ? toast({ status: 'error', title: 'Item ya en el carro' }) : addItem(item);
    addItem(item, quantity);
    setShowItemCount(false);
    toast({
      title: 'Agregado al carrito',
      position: 'bottom-right',
      description: `${item.name} agregado al carrito`,
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  return (
    <>
      <Flex className="w-100 justify-center">
        <Flex className="flex-column mv5 pv4 h-auto ba b--black bg-dark br4 w-80 items-center justify-around">
          <Box className="w-50">
            <Image
              className="fit w-100 h-100 br4 shadow-5"
              src={item.image}
              alt={item.name}
            />
          </Box>
          <Flex className="w-50 flex-column items-center white">
            <h1 className="b f3 mt2">{item.name}</h1>
            <h2 className="f5 mt2">{item.description}</h2>
            <span className="b f5 mt2">{item.stock ? `$${item.price}` : ''}</span>
            {showItemCount ? (
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            ) : (
              <div>
                <Link to="/cart">
                  <Button variant="outline">Terminar mi compra</Button>
                </Link>
                <Link to="/">
                  <Button className="black">Seguir comprando </Button>
                </Link>
              </div>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default ItemDetail;
