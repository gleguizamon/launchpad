/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const data = require('./mock.json');
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const itemPromise = new Promise((resolve, reject) => {
      resolve(data);
    });
    setTimeout(() => {
      itemPromise.then(resolve => {
        const filteredItems = resolve.filter(items => {
          if (categoryId) {
            return items.category === categoryId;
          }
          return items;
        });
        setItems(filteredItems);
      });
    }, 2000);
  }, [categoryId]);

  return (
    <div className="mv6 flex flex-wrap justify-around center">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
