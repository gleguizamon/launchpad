import React from 'react';
import Item from '../Item';

const ItemList = ({ products }) => (
  <>
    {products.map(product => (
      <Item key={product.id} {...product} />
    ))}
  </>
);

export default ItemList;
