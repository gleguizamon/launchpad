import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Badge, Button, Image } from '@chakra-ui/react';

const Item = ({ id, image, name, price, stock }) => (
  <>
    <Box className="ma4 h-card w-100" maxW="sm" borderRadius="xl" overflow="hidden" color="white">
      {stock === 0 ? (
        <Box className="absolute ml2 mt1">
          <Badge borderRadius="full" px="2" colorScheme="red">
            Sin stock
          </Badge>
        </Box>
      ) : null}
      <Image className="fit w-100 h-100" src={image} alt={`Imágen de ${name}`} />
      <Box className="relative top-custom flex items-center justify-between ph2 bg-transparent img-shadow br3">
        <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {name}
        </Box>
        <Box className="f4" as="span">
          {stock ? `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}` : '-'}
        </Box>
        <Box>
          {stock ? (
            <Button className="flex" size="sm" backgroundColor="#ff9700">
              <Link to={`/product/${id}`}>Ver más</Link>
            </Button>
          ) : (
            <Button className="flex not-allowed" size="sm" backgroundColor="grey">
              <span className="not-allowed">Sin Stock</span>
            </Button>
          )}
        </Box>
      </Box>
    </Box>
    <style jsx>{`
      .h-card {
        height: 13rem;
      }
      .top-custom {
        top: -3rem;
        height: 3rem;
      }
      .img-shadow {
        box-shadow: inset 0px -94px 37px -37px rgba(0, 0, 0, 0.7);
      }
      .not-allowed {
        cursor: not-allowed;
      }
    `}</style>
  </>
);

export default Item;
