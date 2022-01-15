import React, { createContext, useState } from 'react';

export const CartContext = createContext();

/**
 * @param {*} param0
 */
export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const addToCart = product => {
    setCart([...cart, product]);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = id => {
    return cart.find(item => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cart, isInCart, addToCart, clear }}>
      {children}
    </CartContext.Provider>
  );
};
