import React, { useRef } from 'react';
import { BiCart } from 'react-icons/bi';
import {
  Button,
  Popover,
  PopoverHeader,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody
} from '@chakra-ui/react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity, cart } = useCartContext();
  if (cart.length === 0) return null;
  const initRef = useRef();
  console.warn(cart.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0));

  const totalPreviewPrice = cart
    .map(item => item.quantity * item.price)
    .reduce((a, b) => a + b, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return (
    <>
      <Popover closeOnBlur={true} placement="bottom" initialFocusRef={initRef}>
        {({ onClose }) => (
          <>
            <PopoverTrigger>
              <Button colorScheme="white" className="shadow-4">
                <BiCart className="f3 primary" />
                {totalQuantity === 0 ? null : <span className="ml2 f3 black">{totalQuantity}</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
              <PopoverHeader pt={3} fontWeight="bold" border="0" className="pb0i">
                Su pedido
              </PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody className="pt0i f6 flex justify-between items-center">
                <span className="mr3">
                  Cantidad de items: {totalQuantity} {`($${totalPreviewPrice})`}
                </span>
                <Link to="/cart">
                  <Button size="sm" colorScheme="blue" onClick={onClose} ref={initRef}>
                    Ver
                  </Button>
                </Link>
              </PopoverBody>
            </PopoverContent>
          </>
        )}
      </Popover>
      <style jsx>{`
        .widget {
          top: -8px;
          right: -8px;
        }
        .pt0i {
          padding-top: 0 !important;
        }
        .pb0i {
          padding-bottom: 0 !important;
        }
      `}</style>
    </>
  );
};

export default CartWidget;
