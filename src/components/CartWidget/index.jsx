import React from 'react';
import { BiCart } from 'react-icons/bi';
import { Button } from '@chakra-ui/react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity, cart } = useCartContext();
  if (cart.length === 0) return null;
  return (
    <>
      <Link to="/cart">
        <Button colorScheme="white" className="shadow-4">
          <BiCart className="f3 primary" />
          {totalQuantity === 0 ? null : <span className="ml2 f3 black">{totalQuantity}</span>}
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
