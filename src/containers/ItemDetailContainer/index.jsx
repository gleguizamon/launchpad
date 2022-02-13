import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import { Center, Spinner } from '@chakra-ui/react';

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

  return loading ? (
    <Center h="80vh" color="black">
      <Spinner size="xl" className="block w-100 h-100" />
    </Center>
  ) : (
    <ItemDetail item={items} />
  );
};

export default ItemDetailContainer;
