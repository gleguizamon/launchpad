import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.css';
import { Navbar } from './components/Navbar/Navbar.component';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById('root')
);
