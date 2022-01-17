import React, { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList';
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
    <span className="db f4 b mt2 ml3 primary">CARGANDO...</span>
  ) : (
    <>
      <h3 className="tc f2 b mt2 primary">{greeting}</h3>
      <div className="mv5-l mv4-m mv3 center mw9 flex flex-wrap justify-around">
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemListContainer;
