import React from 'react';
import Item from '../Item';

const ItemList = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <Item key={item.id} item={item} />
        // usar id para saber la request codificada
      ))}
    </>
  );
};

export default ItemList;
