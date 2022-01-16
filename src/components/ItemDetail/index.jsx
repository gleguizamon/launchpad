import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Image, Box, Flex, useToast } from '@chakra-ui/react';
import ItemCount from '../ItemCount';

const ItemDetail = ({ item }) => {
  const { addItem } = useCartContext();
  const toast = useToast();

  const onAdd = quantityToAdd => {
    toast({
      title: `Añadiste ${quantityToAdd} items al carrito`,
      variant: 'left-accent',
      position: 'top',
      status: 'success',
      isClosable: true
    });
    addItem(item, quantityToAdd);
  };

  return (
    <>
      <Flex className="w-100 justify-center">
        <Flex className="flex-column mv5 pv4 h-auto ba b--black bg-dark br4 w-80 items-center justify-around">
          <Box className="w-50">
            <Image
              className="fit w-100 h-100 br4 shadow-5"
              src={item.imageUrl}
              alt={item.imageAlt}
            />
          </Box>
          <Flex className="w-50 flex-column items-center white">
            <h1 className="b f3 mt2">{item.title}</h1>
            <h2 className="f5 mt2">{item.description}</h2>
            <span className="b f5 mt2">{item.stock ? `$${item.price}` : ''}</span>
            <span className="f5 mb2">{item.stock ? 'Cantidad:' : ''}</span>
            <ItemCount item={item} initial={1} onAdd={onAdd} />
          </Flex>
        </Flex>
      </Flex>
      <style jsx>{`
        .fit {
          object-fit: cover;
        }
      `}</style>
    </>
  );
};

export default ItemDetail;
