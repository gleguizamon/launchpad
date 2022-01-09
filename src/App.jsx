/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ScrollTop from './components/ScrollTop';
import { CartProvider } from './context/CartContext';

const App = () => (
  <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Home" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrado" />} />
        <Route path="/product/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ScrollTop />
    </BrowserRouter>
  </CartProvider>
);

export default App;
