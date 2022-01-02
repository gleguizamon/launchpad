import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Badge, Button, Image } from '@chakra-ui/react';

const Item = ({ id, title, category, imageUrl, imageAlt, description, price, stock }) => {
  // const [count, setCount] = useState(0);

  // const handleAdd = () => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);
  // };
  // <Skeleton isLoaded={load}>
  return (
    <>
      <Box className="mv4 h-card w-100" maxW="sm" borderRadius="xl" overflow="hidden" color="white">
        {stock === 0 ? (
          <Box className="absolute ml2 mt1">
            <Badge borderRadius="full" px="2" colorScheme="red">
              Sin stock
            </Badge>
          </Box>
        ) : null}
        <Image className="fit w-100 h-100" src={imageUrl} alt={imageAlt} />
        <Box className="relative top-custom flex items-center justify-between ph2 bg-transparent img-shadow br3">
          <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {title}
          </Box>
          <Box className="f4" as="span">
            ${price}
          </Box>
          <Box className="">
            <Button className="flex" size="sm" backgroundColor="#ff9700">
              {stock ? <NavLink to={`/product/${id}`}>Ver más</NavLink> : <span>Sin Stock</span>}
            </Button>
          </Box>
        </Box>
      </Box>
      <style jsx>{`
        .h-card {
          height: 13rem;
        }
        .fit {
          object-fit: cover;
        }
        .top-custom {
          top: -3rem;
          height: 3rem;
        }
        .img-shadow {
          box-shadow: inset 0px -94px 37px -37px rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </>
  );
};

export default Item;
