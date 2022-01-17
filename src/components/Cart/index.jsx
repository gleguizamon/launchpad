import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Box, Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, removeItem, clearCart } = useCartContext();

  return items.length ? (
    <section className="w-90 center mw9">
      <header>
        <h2 className="f2 b tc pv3">Lista de compra</h2>
      </header>
      <Box>
        {items.map(payload => {
          return (
            <Flex
              className="h4 br3 mv2 shadow-4 center justify-between items-center bg-white black ba b--black ph3 overflow-hidden"
              key={payload.id}
            >
              <Link className="flex items-center w-100 mw7" to={`/product/${payload.id}`}>
                <img className="br2 w-20 mr4 fit" src={payload.imageUrl} alt={payload.imageAlt} />
                <h3>{payload.title}</h3>
              </Link>
              <p>${payload.price.toFixed(2)}</p>
              <Button colorScheme="red" className="pl2" onClick={() => removeItem(payload.id)}>
                X
              </Button>
            </Flex>
          );
        })}
      </Box>
      <footer className="mb5">
        <h4 className="w-100 flex justify-end mb1">
          Total:
          <span>
            $
            {items.reduce((acc, item) => {
              return acc + item.price.toFixed(2);
            }, 0)}
          </span>
        </h4>
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
            <Link to="/checkout">
              <Button colorScheme="purple" variant="solid">
                Continuar
              </Button>
            </Link>
          </Box>
        </Flex>
      </footer>
    </section>
  ) : (
    <Flex className="justify-center align-center items-center w-100 mt4">
      <h1 className="f2 b">:(&nbsp; Ups, no hay productos en el carrito.</h1>
    </Flex>
  );
};

export default Cart;
