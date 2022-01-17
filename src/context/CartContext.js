import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
const { Provider } = CartContext;

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [items, setItems] = useState([]);

  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      const item = items.find(item => item.id === product.id);
      item.quantity += quantity;
    } else {
      const newItems = [...items];
      newItems.push({ ...product, quantity });

      setItems(newItems);
    }

    setTotalQuantity(totalQuantity + quantity);
  };

  const removeItem = product => {
    const item = items.find(item => item.id === product.id);
    setTotalQuantity(totalQuantity - item.quantity);
    const newItems = items.filter(item => item.id !== product.id);
    setItems(newItems);
  };

  const isInCart = product => {
    const item = items.find(item => item.id === product.id);
    return item ? true : false;
  };

  const clearCart = () => {
    setTotalQuantity(0);
    setItems([]);
  };

  return (
    <Provider
      value={{
        totalQuantity,
        items,
        addItem,
        removeItem,
        clearCart
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
