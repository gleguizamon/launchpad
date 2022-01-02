/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import { fetchCategories } from '../../mocks/async-mock';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(Boolean);
  useEffect(() => {
    setLoad(false);
    fetchCategories(categoryId).then(result => {
      setItems(result);
      setLoad(true);
      if (categoryId) {
        return items.category === categoryId;
      }
      return items;
    });
  }, [categoryId]);

  return (
    <>
      <div className="mv6 flex flex-wrap justify-around center">
        <ItemList items={items} load={load} />
      </div>
    </>
  );
};

export default ItemListContainer;
