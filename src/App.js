import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { Navbar } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar>
        <Navbar.Brand>
          Parafertube
        </Navbar.Brand>  
      </Navbar>
    </div>
  );
}

export default App;
