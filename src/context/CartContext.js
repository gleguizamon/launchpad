import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
const { Provider } = CartContext;

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const itemExist = isInCart(item.id);
    if (itemExist) {
      const order = findCart(item.id);
      order.quantity += quantity;
    } else {
      const newCart = [...cart];
      newCart.push({ ...item, quantity });

      setCart(newCart);
    }

    setTotalQuantity(totalQuantity + quantity);
  };

  const removeItem = productId => {
    const item = findCart(productId);
    setTotalQuantity(totalQuantity - item.quantity);
    const newItems = cart.filter(item => item.id !== productId);
    setCart(newItems);
  };

  const findCart = id => cart.find(item => item.id === id);

  const isInCart = productId => {
    const order = cart.find(item => item.id === productId);
    if (order) return true;
  };

  const clearCart = () => {
    setTotalQuantity(0);
    setCart([]);
  };

  return (
    <Provider
      value={{
        totalQuantity,
        cart,
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
