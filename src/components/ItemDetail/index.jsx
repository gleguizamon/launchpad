import React, { useState } from 'react';
import ItemCount from '../ItemCount';
import { Image, Box, Flex } from '@chakra-ui/react';

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState();
  // alert(item);

  return (
    <>
      <Flex className="mt5 h5 ba b--black items-center justify-around">
        <Box className="w-20">
          <Image className="fit w-100 h-100" src={item.imageUrl} alt={item.imageAlt} />
        </Box>
        <Box>
          <Box>
            <h2>{item.title}</h2>
          </Box>
          <Box>
            <h1>${item.price}</h1>
          </Box>
          <Box>
            <p>{item.description}</p>
          </Box>
          {!count ? (
            <ItemCount stock={item.stock} onAdd={setCount} />
          ) : (
            <>
              <button>Terminar compra</button>
            </>
          )}
        </Box>
      </Flex>
      <style jsx>{`
        .fit {
          object-fit: cover;
        }
      `}</style>
    </>
  );
};

export default ItemDetail;
