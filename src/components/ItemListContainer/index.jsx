/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import { products } from '../../mocks/async-mock';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise(resolve => {
      setTimeout(() => {
        const myData = categoryId
          ? products.filter(item => item.category === categoryId)
          : products;
        resolve(myData);
      }, 2000);
    });

    getItems
      .then(res => {
        setItems(res);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return loading ? (
    <h2>CARGANDO...</h2>
  ) : (
    <>
      <h3 className="tc">{greeting}</h3>
      <div className="mv6 flex flex-wrap justify-around center">
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemListContainer;
