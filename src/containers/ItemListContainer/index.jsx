import React, { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import { Center, Spinner, useToast } from '@chakra-ui/react';

const ItemListContainer = () => {
  const toast = useToast();
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
          toast({
            title: 'Error',
            description: 'No hay productos disponibles',
            status: 'error',
            duration: 5000,
            isClosable: true
          });
        } else {
          const querySnapshot = payload.docs.map(e => {
            return { ...e.data(), id: e.id };
          });
          const data = categoryId
            ? querySnapshot.filter(product => product.category === categoryId)
            : querySnapshot;
          setItems(
            data.filter(
              product =>
                product.name &&
                typeof product.name === 'string' &&
                product.category &&
                typeof product.category === 'string' &&
                product.description &&
                typeof product.description === 'string' &&
                product.id &&
                typeof product.id === 'string' &&
                product.image &&
                typeof product.image === 'string' &&
                product.name &&
                typeof product.name === 'string' &&
                product.price &&
                typeof product.price === 'number' &&
                (product.stock !== null || product.stock !== undefined) &&
                typeof product.stock === 'number'
            )
          );
        }
      })
      .catch(err => console.warn(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return loading ? (
    <Center h="80vh" color="black">
      <Spinner size="xl" className="block w-100 h-100" />
    </Center>
  ) : (
    <>
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
