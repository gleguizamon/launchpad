import React, { useState } from 'react';
import { HStack, Button, Input } from '@chakra-ui/react';

// el boton hay que tener cuidado porque no se puede enviar si supera los rangos del stock.

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleClick = e => {
    e === '+' ? setQuantity(quantity + 1) : setQuantity(quantity - 1);
  };

  const handleAdd = () => {
    if (quantity === 0 || quantity > stock) return;
    onAdd(quantity);
  };

  return (
    <>
      {stock ? (
        <HStack maxW="150px">
          <Button
            isDisabled={quantity === 1}
            className="bg-white primary"
            onClick={handleClick('+')}
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
            onClick={handleClick()}
          >
            +
          </Button>
        </HStack>
      ) : (
        <>
          <p className="red">No hay stock</p>
        </>
      )}
      <Button
        isDisabled={quantity > stock || quantity === 0}
        className="bg-white primary br-pill"
        onClick={handleAdd}
      >
        Agregar al carrito
      </Button>
    </>
  );
};

export default ItemCount;
