import * as React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ScrollTop from './components/ScrollTop';

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <Navbar />
      <ItemListContainer />
      <ScrollTop />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
