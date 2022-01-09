import React, { useState } from 'react';
import ItemCount from '../ItemCount';
import { Image, Box, Flex, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({ item, addItem }) => {
  const { title, imageUrl, imageAlt, description, price, stock } = item;
  console.warn(item);
  const { count, setCount } = useState();
  const navigate = useNavigate();

  const processBuy = () => {
    addItem({ item, count });
    navigate('/cart');
  };

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
            <span className="b f5 mt2">{stock ? `$${price}` : ''}</span>
            <span className="f5 mb2">{stock ? 'Cantidad:' : ''}</span>
            {!count ? (
              <>
                <ItemCount stock={stock} initial={1} onAdd={setCount} />
                <span className="f5 mt2">{stock ? `(${stock} disponibles)` : ''}</span>
              </>
            ) : (
              <>
                <Button className="bg-white primary br-pill" onClick={processBuy}>
                  Terminar compra
                </Button>
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
