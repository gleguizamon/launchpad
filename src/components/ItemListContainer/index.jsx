import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList';

const mock = [
  {
    isNew: true,
    categories: 'viajes',
    title: 'Nueva York',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos molestiae eligendi ad ullam corrupti, similique qui praesentium, reiciendis quas expedita animi distinctio veritatis modi laboriosam tempore quibusdam nisi esse impedit.',
    imageUrl: 'https://picsum.photos/400/200',
    country: 'Estados Unidos',
    price: 4805.6
  },
  {
    isNew: true,
    categories: 'viajes',
    title: 'Buenos Aires',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos molestiae eligendi ad ullam corrupti, similique qui praesentium, reiciendis quas expedita animi distinctio veritatis modi laboriosam tempore quibusdam nisi esse impedit.',
    imageUrl: 'https://picsum.photos/400/200',
    country: 'Argentina',
    price: 2003.3
  },
  {
    isNew: false,
    categories: 'viajes',
    title: 'Bogota',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos molestiae eligendi ad ullam corrupti, similique qui praesentium, reiciendis quas expedita animi distinctio veritatis modi laboriosam tempore quibusdam nisi esse impedit.',
    imageUrl: 'https://picsum.photos/400/200',
    country: 'Colombia',
    price: 1270.8
  },
  {
    isNew: true,
    categories: 'experiences',
    title: 'Paracaidismo en el Caribe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos molestiae eligendi ad ullam corrupti, similique qui praesentium, reiciendis quas expedita animi distinctio veritatis modi laboriosam tempore quibusdam nisi esse impedit.',
    imageUrl: 'https://picsum.photos/400/200',
    country: 'Cuba',
    price: 4805.6
  },
  {
    isNew: true,
    categories: 'experiences',
    title: 'Trekking en el Himalaya',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos molestiae eligendi ad ullam corrupti, similique qui praesentium, reiciendis quas expedita animi distinctio veritatis modi laboriosam tempore quibusdam nisi esse impedit.',
    imageUrl: 'https://picsum.photos/400/200',
    country: 'Nepal',
    price: 2003.3
  },
  {
    isNew: false,
    categories: 'experiences',
    title: 'Cabalgatas en los Andes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos molestiae eligendi ad ullam corrupti, similique qui praesentium, reiciendis quas expedita animi distinctio veritatis modi laboriosam tempore quibusdam nisi esse impedit.',
    imageUrl: 'https://picsum.photos/400/200',
    country: 'Argentina',
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
    <div className="mv6 flex flex-wrap justify-around center">
      <ItemList className="w-20" items={items} />
    </div>
  );
};

export default ItemListContainer;
