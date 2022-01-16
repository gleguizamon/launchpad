import React from 'react';
import { BiCart } from 'react-icons/bi';
import { Button, Box } from '@chakra-ui/react';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cart } = useCartContext();
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
      <Button colorScheme="white" className="shadow-4">
        <BiCart className="f3 primary" />
        {cart.length > 0 && (
          <Box className="ml-2">
            <span className="f3">{total}</span>
          </Box>
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
