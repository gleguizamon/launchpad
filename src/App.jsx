import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ScrollTop from './components/ScrollTop';
import Cart from './components/Cart';
import CartContext from './context/CartContext';
import OrderDetail from './components/OrderDetail';

const App = () => (
  <CartContext>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/product/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderDetail />} />
        <Route path="/order/:idOrder" element={<OrderDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ScrollTop />
    </BrowserRouter>
  </CartContext>
);

export default App;
