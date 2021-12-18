import React from 'react';

export const Item = ({ item }) => (
  <div>
    <h1>Items:</h1>
    <p>Categoría - {item.categories}</p>
    <p>Título - {item.title}</p>
    <p>Descripción - {item.description}</p>
    <p>Precio - {item.price}</p>
  </div>
);

export default Item;
