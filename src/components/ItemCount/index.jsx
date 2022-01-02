import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';

const ItemCount = ({ stock }) => {
  return (
    <>
      {stock ? (
        <NumberInput size="md" maxW={24} defaultValue={1} min={1} max={stock}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      ) : (
        <>
          <p className="red">No hay stock</p>
        </>
      )}
    </>
  );
};

export default ItemCount;
