import React, { createContext, useState } from 'react';

export const CartContext = createContext();

/**
 * @param {*} param0
 */
export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const isInCart = id => {
    const filtered = cart.find(i => i.item.id === id);
    return filtered !== undefined;
  };

  const addItem = item => {
    const filtered = cart.find(i => i.item.id === item.id);
    if (filtered) {
      filtered.quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, { item, quantity: 1 }]);
    }
  };

  const removeItem = id => {
    const filtered = cart.filter(i => i.item.id !== id);
    setCart([...filtered]);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, isInCart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};
