import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';
// import { products } from '../../mocks/async-mock';
import { getFirestore } from '../../firebase';

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  // useEffect(() => {
  //   setLoading(true);
  //   const getItems = new Promise(resolve => {
  //     setTimeout(() => {
  //       const myData = products.find(product => product.id === itemId);
  //       resolve(myData);
  //     }, 2000);
  //   });

  //   getItems
  //     .then(res => {
  //       setItems(res);
  //     })
  //     .finally(() => setLoading(false));
  // }, [itemId]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('products');
    setLoading(true);
    itemCollection
      .get()
      .then(payload => {
        if (!payload) {
          console.warn('Items not found');
        } else {
          const querySnapshot = payload.docs.map(e => {
            return { ...e.data(), id: e.id };
          });
          const data = itemId
            ? querySnapshot.find(product => product.id === itemId)
            : querySnapshot;
          setItems(data);
        }
      })
      .catch(err => console.warn(err))
      .finally(() => setLoading(false));
  }, [itemId]);

  return loading ? <h2>CARGANDO...</h2> : <ItemDetail item={items} />;
};

export default ItemDetailContainer;
