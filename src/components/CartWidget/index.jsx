import React, { useContext } from 'react';
import { BiCart } from 'react-icons/bi';
import { Button, Box } from '@chakra-ui/react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Button colorScheme="white" className="shadow-4">
        <BiCart className="f3 primary" />
        {cart.length === 0 && (
          <Box className="absolute widget f4 bg-dark white w-40 br-100">{quantity}</Box>
        )}
      </Button>
      <style jsx>{`
        .widget {
          top: -8px;
          right: -8px;
        }
      `}</style>
    </>
  );
};

export default CartWidget;
