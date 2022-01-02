import React from 'react';
import Item from '../Item';

const ItemList = ({ items }) => (
  <>
    {items?.map(item => (
      <Item {...item} key={item.id} />
    ))}
  </>
);

export default ItemList;
