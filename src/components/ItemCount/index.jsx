import React, { useState } from 'react';
import { HStack, Button, Input } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const ItemCount = ({ item, initial, addToCart, removeFromCart }) => {
  const [count, setCount] = useState(initial);

  const handleChange = e => {
    setCount(e.target.value);
  };

  const handleAdd = () => {
    addToCart(item, count);
    setCount(initial);
  };

  const handleRemove = () => {
    removeFromCart(item, count);
    setCount(initial);
  };

  return (
    <>
      {item.stock ? (
        <>
          <HStack maxW="150px">
            <Button isDisabled={count === 1} className="bg-white primary" onClick={handleRemove}>
              -
            </Button>
            <Input
              isRequired
              borderColor={count > item.stock ? 'red' : 'white'}
              focusBorderColor={count > item.stock ? 'red.500' : 'white'}
              className="w-10 tc"
              type="number"
              value={count > 0 ? count : 1}
              onChange={handleChange}
              onClick={e => e.target.select()}
            />
            <Button
              isDisabled={count >= item.stock}
              className="bg-white primary"
              onClick={handleAdd}
            >
              +
            </Button>
          </HStack>
          <Button
            isDisabled={count > item.stock || count === 0}
            className="bg-white primary br-pill"
            onClick={handleAdd}
          >
            Agregar al carrito
          </Button>
          <NavLink to="/cart">
            <Button className="bg-white primary br-pill">
              <p>Ir al carrito</p>
            </Button>
          </NavLink>
        </>
      ) : (
        <>
          <p className="red">No hay stock</p>
        </>
      )}
    </>
  );
};

export default ItemCount;
