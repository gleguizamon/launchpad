import React from 'react';
import { Box, Badge, Image, Button } from '@chakra-ui/react';

export const Item = ({ item }) => (
  <Box
    className="mv4"
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    color="white"
  >
    <Image src={item.imageUrl} alt={item.imageAlt} />

    <Box p="6" backgroundColor="gray.600">
      <Box display="flex" alignItems="baseline">
        {item.isNew && (
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
        )}
        <Box
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {item.beds} beds &bull; {item.baths} baths
        </Box>
      </Box>

      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {item.title}
      </Box>

      <Box>
        {item.price}
        <Box as="span" fontSize="sm">
          / ars
        </Box>
        <>
          <Button size="sm" mt="1rem" backgroundColor="#ff9700">
            Mostrar detalles
          </Button>
        </>
      </Box>
    </Box>
  </Box>
);

export default Item;
