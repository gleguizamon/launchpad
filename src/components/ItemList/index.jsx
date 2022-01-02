import React from 'react';
import Item from '../Item';

const ItemList = ({ items, load }) => (
  <>
    {items.map(item => (
      <Item item={item} load={load} />
    ))}
  </>
);

export default ItemList;
