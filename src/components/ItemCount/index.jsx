import React, { useState } from 'react';
import { Box, HStack, Button, useToast } from '@chakra-ui/react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const toast = useToast();

  const handleAdd = () => {
    if (count < stock) {
      stock = stock - count;
      setCount(count + 1);
    }
  };

  const handleRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleBuy = () => {
    stock >= count ? onAdd(count) : toast({ status: 'error', title: 'No hay stock' });
  };

  return (
    <>
      {stock ? (
        <Box>
          <HStack maxW="150px">
            <Button isDisabled={count === 1} className="bg-white primary" onClick={handleRemove}>
              -
            </Button>
            <Box as="span">{count}</Box>
            <Button isDisabled={count >= stock} className="bg-white primary" onClick={handleAdd}>
              +
            </Button>
          </HStack>
          <Button
            isDisabled={count > stock || count === 0}
            className="bg-white primary br-pill"
            onClick={handleBuy}
          >
            Agregar al carrito
          </Button>
        </Box>
      ) : (
        <>
          <p className="red">No hay stock</p>
        </>
      )}
    </>
  );
};

export default ItemCount;
