/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchId } from '../../mocks/async-mock';
import ItemDetail from '../ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    getItems(id);
  }, [id]);

  const getItems = id => {
    fetchId(id).then(result => {
      setProduct(result);
    });
  };

  return product ? <ItemDetail item={product} /> : null;
};

export default ItemDetailContainer;
