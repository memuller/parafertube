import React from 'react';
import './App.scss';

import { Navbar, Row, Col, Container } from 'react-bootstrap'

import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <header className="bg-light py-2">
        <Container>
          <Row>
            <Col xs="12" md className="text-center text-md-left">
              <Navbar.Brand>
                Parafertube
              </Navbar.Brand>
            </Col>
            <Col xs="12" md className="text-center text-md-right">
              <Search />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
