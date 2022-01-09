import React from 'react';
import { BiCart } from 'react-icons/bi';
import { Button } from '@chakra-ui/react';
import { BsFillCircleFill } from 'react-icons/bs';

export const CartWidget = ({ hasItem = true }) => {
  return (
    <>
      {hasItem ? (
        <Button colorScheme="white" className="shadow-4">
          <BsFillCircleFill className="absolute widget f6 primary" />
          {/* Poner contador aquí, activado por hasItem */}
          <BiCart className="f3 primary" />
        </Button>
      ) : (
        <Button colorScheme="white" className="shadow-4">
          <BiCart className="f3 primary" />
        </Button>
      )}
      <style jsx>{`
        .widget {
          top: -5px;
          right: -5px;
        }
      `}</style>
    </>
  );
};

export default CartWidget;
