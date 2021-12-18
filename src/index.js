import * as React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <Navbar />
      <ItemListContainer />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
