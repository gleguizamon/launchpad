import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList';

const mock = [
  { categories: 'viajes', title: 'Tulum', description: 'Mexico', price: 4805.6 },
  { categories: 'viajes', title: 'Buenos Aires', description: 'Argentina', price: 2503.3 },
  { categories: 'viajes', title: 'Bogota', description: 'Colombia', price: 1270.8 }
];

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const itemPromise = new Promise((resolve, reject) => {
      resolve(mock);
    });
    itemPromise.then(resolve => setItems(resolve));
  }, []);
  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
