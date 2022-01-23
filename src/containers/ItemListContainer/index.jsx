import React, { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

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
      {!categoryId ? <h2 className="f2 b tc pv3">Home</h2> : null}
      {categoryId === 'adventure' ? <h2 className="f2 b tc pv3">Aventura</h2> : null}
      {categoryId === 'gastronomy' ? <h2 className="f2 b tc pv3">Gastronomía</h2> : null}
      {categoryId === 'stays' ? <h2 className="f2 b tc pv3">Estadías</h2> : null}
      <div className="mv4-l mv4-m mv3 center mw9 flex flex-wrap justify-around">
        <ItemList products={items} />
      </div>
    </>
  );
};

export default ItemListContainer;
