import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList';

const mock = [
  {
    isNew: true,
    categories: 'viajes',
    title: 'Nueva York',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga debitis, officia quaerat sit provident consequuntur consectetur odio quod maiores nisi id impedit magnam nam? Doloribus repellendus nobis sequi obcaecati ducimus! Aspernatur eius quidem molestiae possimus, earum rem enim dolores officia a ipsa hic, vel dolorum praesentium! Sit aut error incidunt vitae nostrum totam libero unde ab quisquam harum. Vero, deserunt?',
    imageUrl: 'https://picsum.photos/400/200',
    country: 'Estados Unidos',
    price: 4805.6
  },
  {
    isNew: true,
    categories: 'viajes',
    title: 'Buenos Aires',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga debitis, officia quaerat sit provident consequuntur consectetur odio quod maiores nisi id impedit magnam nam? Doloribus repellendus nobis sequi obcaecati ducimus! Aspernatur eius quidem molestiae possimus, earum rem enim dolores officia a ipsa hic, vel dolorum praesentium! Sit aut error incidunt vitae nostrum totam libero unde ab quisquam harum. Vero, deserunt?',
    imageUrl: 'https://picsum.photos/400/200',
    country: 'Argentina',
    price: 2003.3
  },
  {
    isNew: false,
    categories: 'viajes',
    title: 'Bogota',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga debitis, officia quaerat sit provident consequuntur consectetur odio quod maiores nisi id impedit magnam nam? Doloribus repellendus nobis sequi obcaecati ducimus! Aspernatur eius quidem molestiae possimus, earum rem enim dolores officia a ipsa hic, vel dolorum praesentium! Sit aut error incidunt vitae nostrum totam libero unde ab quisquam harum. Vero, deserunt?',
    imageUrl: 'https://picsum.photos/400/200',
    country: 'Colombia',
    price: 1270.8
  }
];

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const itemPromise = new Promise((resolve, reject) => {
      resolve(mock);
    });
    itemPromise.then(resolve => setItems(resolve));
  }, []);
  return (
    <div className="mv6 flex justify-around center">
      <ItemList className="w-20" items={items} />
    </div>
  );
};

export default ItemListContainer;
