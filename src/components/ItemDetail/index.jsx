import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Box, Flex, Button } from '@chakra-ui/react';
import ItemCount from '../ItemCount';

const ItemDetail = ({ item, addToCart }) => {
  const { count, setCount } = useState();
  const navigate = useNavigate();
  // Cuando el estado interno de ItemDetail tenga la cantidad de ítems solicitados, mostrar en su lugar un botón que diga “Terminar mi compra”
  const handleAdd = () => {
    addToCart({ item, count });
    navigate('/cart');
  };

  // process buy

  return (
    <>
      <Flex className="w-100 justify-center">
        <Flex className="flex-column mv5 pv4 h-auto ba b--black bg-dark br4 w-80 items-center justify-around">
          <Box className="w-50">
            <Image
              className="fit w-100 h-100 br4 shadow-5"
              src={item.imageUrl}
              alt={item.imageAlt}
            />
          </Box>
          <Flex className="w-50 flex-column items-center white">
            <h1 className="b f3 mt2">{item.title}</h1>
            <h2 className="f5 mt2">{item.description}</h2>
            <span className="b f5 mt2">{item.stock ? `$${item.price}` : ''}</span>
            <span className="f5 mb2">{item.stock ? 'Cantidad:' : ''}</span>
            {!count ? (
              <ItemCount stock={item.stock} initial={1} onAdd={count => setCount(count)} />
            ) : (
              <Button className="bg-white primary br-pill" onClick={handleAdd}>
                Terminar compra
              </Button>
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
