/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ScrollTop from './components/ScrollTop';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<ItemListContainer />} />
      <Route path="/category/:categoryId" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
    </Routes>
    <ScrollTop />
  </BrowserRouter>
);

export default App;
