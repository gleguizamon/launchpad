import React, { useState } from 'react';
import { Button, Collapse } from '@chakra-ui/react';

const ItemDetailContainer = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <>
      <Collapse startingHeight={20} in={show}>
        {item.description}
      </Collapse>
      <Button size="sm" onClick={handleToggle} mt="1rem" backgroundColor="#ff9700">
        Mostrar {show ? 'menos' : 'más'}
      </Button>
    </>
  );
};

export default ItemDetailContainer;
