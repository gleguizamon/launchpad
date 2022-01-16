import React, { createContext, useContext, useState } from 'react';

const context = createContext();

const { Provider } = context;

export const useCartContext = () => {
  return useContext(context);
};

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart([...cart, product]);
  };

  const removeFromCart = product => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const clearItem = product => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const isInCart = product => {
    return cart.some(item => item.id === product.id);
  };

  console.warn(cart);
  return (
    <Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        clearItem,
        isInCart
      }}
    >
      {children}
    </Provider>
  );
};

export default CartContext;
