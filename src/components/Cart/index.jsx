import React, { useState, useEffect } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Box, Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import OrderTable from '../OrderTable';
import CheckoutForm from '../CheckoutForm';

const Cart = () => {
  const { cart, clearCart } = useCartContext();
  const [hasStock, setHasStock] = useState(false);
  const overstockMap = cart.filter(item => item.stock < item.quantity).map(item => item.name);
  const itemsWithOverstock = overstockMap.join('\n');

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
        <div className="flex-l db">
          <OrderTable items={cart} withRemoveItem={true} />
          <CheckoutForm hasStock={hasStock} items={cart} itemsWithOverstock={itemsWithOverstock} />
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
