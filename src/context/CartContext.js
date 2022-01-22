import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
const { Provider } = CartContext;

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [items, setItems] = useState([]);

  const addItem = (productId, quantity) => {
    if (isInCart(productId)) {
      const item = items.find(item => item.id === productId);
      console.warn(item);
      item.quantity += quantity;
    } else {
      const newItems = [...items];
      newItems.push({ ...productId, quantity });

      setItems(newItems);
    }

    setTotalQuantity(totalQuantity + quantity);
  };

  const removeItem = productId => {
    const item = items.find(item => item.id === productId);
    setTotalQuantity(totalQuantity - item.quantity);
    const newItems = items.filter(item => item.id !== productId);
    setItems(newItems);
    console.warn(items);
  };

  const isInCart = productId => {
    const item = items.find(item => item.id === productId);
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
