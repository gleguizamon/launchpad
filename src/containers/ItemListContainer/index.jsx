import React, { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
// import { products } from '../../mocks/async-mock';
import { getFirestore } from '../../firebase';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  // useEffect(() => {
  //   setLoading(true);
  //   const getItems = new Promise(resolve => {
  //     setTimeout(() => {
  //       const data = categoryId
  //         ? products.filter(product => product.category === categoryId)
  //         : products;
  //       resolve(data);
  //     }, 2000);
  //   });

  //   getItems
  //     .then(res => {
  //       setItems(res);
  //     })
  //     .finally(() => setLoading(false));
  // }, [categoryId]);

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
          const data = categoryId
            ? querySnapshot.filter(product => product.category === categoryId)
            : querySnapshot;
          setItems(data);
        }
      })
      .catch(err => console.warn(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return loading ? (
    <span className="db f4 b mt2 ml3 primary">CARGANDO...</span>
  ) : (
    <>
      <h3 className="tc f2 b mt2 primary">{greeting}</h3>
      <div className="mv5-l mv4-m mv3 center mw9 flex flex-wrap justify-around">
        <ItemList products={items} />
      </div>
    </>
  );
};

export default ItemListContainer;
