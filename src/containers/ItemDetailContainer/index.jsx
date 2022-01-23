import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

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
