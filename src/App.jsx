/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ScrollTop from './components/ScrollTop';

const App = () => (
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
);

export default App;
