import React, { useState, useEffect } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Box, Flex, Button, Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import OrderTable from '../OrderTable';
import CheckoutForm from '../CheckoutForm';

const Cart = () => {
  const { cart, clearCart } = useCartContext();
  const [hasStock, setHasStock] = useState(false);
  const itemsWithOverstock = cart.filter(item => item.stock < item.quantity).map(item => item.name);

  useEffect(() => {
    cart.filter(item => item.stock < item.quantity).length > 0
      ? setHasStock(true)
      : setHasStock(false);
  }, [cart]);

  return cart.length ? (
    <>
      <section className="w-90 center mw8 pv4">
        <header>
          <span className="f3 b tl pv3 pl2">Va a comprar:</span>
        </header>
        <div className="flex">
          <OrderTable items={cart} withRemoveItem={true} />
          <CheckoutForm hasStock={hasStock} itemsWithOverstock={itemsWithOverstock} />
        </div>

        <footer className="mb5 mt2">
          <Flex className="justify-between">
            <Button colorScheme="red" variant="solid" onClick={clearCart}>
              Limpiar carrito
            </Button>
            <Box>
              <Link to="/">
                <Button className="mr2" colorScheme="teal" variant="solid">
                  Ver más productos
                </Button>
              </Link>
              <Tooltip
                isDisabled={!hasStock}
                hasArrow
                mt={1}
                label={`Los siguientes items superaron el limite de unidades: ${itemsWithOverstock}`}
                bg="gray.300"
                color="black"
                closeDelay={500}
              >
                <Link to="/checkout">
                  <Button isDisabled={hasStock} colorScheme="purple" variant="solid">
                    Continuar
                  </Button>
                </Link>
              </Tooltip>
            </Box>
          </Flex>
        </footer>
      </section>
    </>
  ) : (
    <Box className="w-100 mt4 tc">
      <h1 className="f2 b">:(&nbsp; Ups, no hay productos en el carrito</h1>
      <h3 className="f4 underline">
        <Link to="/">Seguir comprando...</Link>
      </h3>
    </Box>
  );
};

export default Cart;
