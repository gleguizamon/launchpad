import React, { useState } from 'react';
import ItemCount from '../ItemCount';
import { Image, Box, Flex } from '@chakra-ui/react';

const ItemDetail = ({ title, imageUrl, imageAlt, description, price, stock }) => {
  const [count, setCount] = useState();

  return (
    <>
      <Flex className="mt5 h5 ba b--black items-center justify-around">
        <Box className="w-20">
          <Image className="fit w-100 h-100" src={imageUrl} alt={imageAlt} />
        </Box>
        <Box>
          <Box>
            <h2>{title}</h2>
          </Box>
          <Box>
            <h1>${price}</h1>
          </Box>
          <Box>
            <p>{description}</p>
          </Box>
          {!count ? (
            <ItemCount stock={stock} onAdd={setCount} />
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
