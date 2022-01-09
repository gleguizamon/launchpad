/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../mocks/async-mock';
import ItemDetail from '../../components/ItemDetail';
import { CartContext } from '../../context/CartContext';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise(resolve => {
      setTimeout(() => {
        const myData = products.find(item => item.id === itemId);
        resolve(myData);
      }, 2000);
    });

    getItems
      .then(res => {
        setProduct(res);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return loading ? <h2>CARGANDO...</h2> : <ItemDetail item={product} addItem={addItem} />;
};

export default ItemDetailContainer;
