import React, { useState } from 'react';
import ItemCount from '../ItemCount';
import { Image, Box, Flex } from '@chakra-ui/react';

const ItemDetail = ({ title, imageUrl, imageAlt, description, price, stock }) => {
  const [count, setCount] = useState();

  return (
    <>
      <Flex className="w-100 justify-center">
        <Flex className="flex-column mv5 pv4 h-auto ba b--black bg-dark br4 w-80 items-center justify-around">
          <Box className="w-50">
            <Image className="fit w-100 h-100 br4 shadow-5" src={imageUrl} alt={imageAlt} />
          </Box>
          <Flex className="w-50 flex-column items-center white">
            <h1 className="b f3 mt2">{title}</h1>
            <h2 className="f5 mt2">{description}</h2>
            <span className="b f5 mv2">{stock ? `$${price}` : `-`}</span>
            {!count ? (
              <ItemCount stock={stock} onAdd={setCount} />
            ) : (
              <>
                <button>Terminar compra</button>
              </>
            )}
          </Flex>
        </Flex>
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
