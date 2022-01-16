import React, { createContext, useContext, useState } from 'react';

const context = createContext();
const { Provider } = context;

export const useCartContext = () => useContext(context);

const CartContext = ({ children }) => {
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart(prevCart => [...prevCart, item]);
    setCartItems(prevCartItems => prevCartItems + 1);
    setCartTotal(prevCartTotal => prevCartTotal + item.price);

    console.warn('addItem', cart);
    console.warn('addItem', cartItems);
    console.warn('addItem', cartTotal);
  };

  const removeItem = item => {
    const filtredItems = cart.filter(items => items.id != item.id);
    setCartTotal(cartTotal - item.price);
    setCartItems(cartItems - 1);
    setCart(filtredItems);
  };

  const clearCart = () => {
    setCart([]);
    setCartItems(0);
    setCartTotal(0);
  };

  const isInCart = id => cart.find(item => item.id === id);

  console.warn(cart);
  return (
    <Provider
      value={{
        cart,
        cartItems,
        cartTotal,
        addItem,
        removeItem,
        clearCart,
        isInCart
      }}
    >
      {children}
    </Provider>
  );
};

export default CartContext;
