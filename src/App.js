import React from 'react';
import './App.scss';

import { Row, Col, Container } from 'react-bootstrap'
import MaterialIcon from 'material-icons-react'
import { connect } from 'react-redux'

import Search from './components/Search'
import ResultsList from './components/ResultsList'
import Player from './components/Player';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="bg-dark py-2 mb-4">
          <Container>
            <Row className="align-items-center">
              <Col xs="12" md className="text-center text-md-left">
                  <h1 className="text-light">
                    <MaterialIcon
                      icon="video_library"
                      size="medium" invert
                    />
                    <span>
                      Parafertube
                    </span>
                  </h1>
              </Col>
              <Col xs="12" md className="text-center text-md-right ">
                <Search />
              </Col>
            </Row>
          </Container>
        </header>
        <article className="p-2">
          <Row>
            <Col xs="12" md="6" xl="4">
              <ResultsList />
            </Col>
            <Col xs="12" md="6" xl="8" className="order-first order-md-2 mb-4 mb-md-0">
              <Player/>
            </Col>
          </Row>
        </article>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  results: state.results,
  showPlayer: state.selectedVideoId !== null
})

export default connect(
  mapStateToProps
)(App);
