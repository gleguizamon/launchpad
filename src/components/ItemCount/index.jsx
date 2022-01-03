import React from 'react';
import { HStack, Button, Input, useNumberInput } from '@chakra-ui/react';

const ItemCount = ({ stock }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: stock
  });
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });
  return (
    <>
      {stock ? (
        <HStack maxW="150px">
          <Button {...dec} colorScheme="teal">
            -
          </Button>
          <Input className="tc" {...input} />
          <Button {...inc} colorScheme="teal">
            +
          </Button>
        </HStack>
      ) : (
        <>
          <p className="red">No hay stock</p>
        </>
      )}
    </>
  );
};

export default ItemCount;
