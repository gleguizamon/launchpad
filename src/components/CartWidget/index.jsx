import React from 'react';
import { BiCart } from 'react-icons/bi';
import { Button, Box } from '@chakra-ui/react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cartItems } = useCartContext();

  return (
    <>
      <Link to="/cart">
        <Button colorScheme="white" className="shadow-4">
          <BiCart className="f3 primary" />
          {cartItems.length > 0 && <Box className="f3">{cartItems.length}</Box>}
        </Button>
      </Link>
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
