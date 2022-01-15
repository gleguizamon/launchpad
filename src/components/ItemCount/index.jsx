import React, { useState } from 'react';
import { HStack, Button, Input } from '@chakra-ui/react';

// el boton hay que tener cuidado porque no se puede enviar si supera los rangos del stock.

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleClick = e => {
    const value = e.target.value;
    if (value < 0) return;
    if (value > stock) return;
    setQuantity(value);
  };

  const handleAdd = () => {
    console.warn(quantity);
    if (quantity === 0) return;
    if (quantity > stock) return;
    // si se puede comentar dos líneas superiores
    onAdd(quantity);
  };

  return (
    <>
      {stock ? (
        <>
          <HStack maxW="150px">
            <Button
              isDisabled={quantity === 1}
              className="bg-white primary"
              onClick={() => handleClick(-1)}
            >
              -
            </Button>
            <Input
              isRequired
              borderColor={quantity > stock ? 'red' : 'white'}
              focusBorderColor={quantity > stock ? 'red.500' : 'white'}
              className="w-10 tc"
              type="number"
              value={quantity > 0 ? quantity : 1}
              onChange={e => setQuantity(parseInt(e.target.value))}
              onClick={e => e.target.select()}
            />
            <Button
              isDisabled={quantity >= stock}
              className="bg-white primary"
              onClick={() => handleClick(+1)}
            >
              +
            </Button>
          </HStack>
          <Button
            isDisabled={quantity > stock || quantity === 0}
            className="bg-white primary br-pill"
            onClick={handleAdd}
          >
            Agregar al carrito
          </Button>
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
