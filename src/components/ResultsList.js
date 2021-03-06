import React from 'react'

import { connect } from 'react-redux'

import { Card, Spinner } from 'react-bootstrap'
import Result from './Result'

class ResultsList extends React.Component {
  
  /**
   * renders a list of Result elements,
   * one for each item on props.results
   * @returns {JSX} <ul> w/ Result components
   */
  renderList(){
    const items = this.props.results.map((item) => {
      return (
        <Result key={item.id.videoId} data={item} />
      )
    })
    return (
      <ul className="list-unstyled">
        {items}
      </ul>
    )
  }

  /**
   * renders a notice to be show when no results are found
   * @returns {JSX} <Card>
   */
  renderEmpty() {
    return (
      <Card bg='warning' text='white'>
        <Card.Body>
          No results found.
        </Card.Body>
      </Card>
    )
  }

  /**
   * renders a notice to be show when no searches have been made yet
   * @returns {JSX} <Card>
   */
  renderInitial() {
    return (
      <Card bg="light">
        <Card.Body>
          No results yet. <br/>
          Search something!
        </Card.Body>
      </Card>
    )
  }

/**
 * renders a notice to be show when a search error has ocurred
 * @returns {JSX} <Card> 
 */
  renderError(){
    return (
      <Card bg="error" text="white">
        <Card.Body>
          Something went wrong!
        </Card.Body>
      </Card>
    )
  }

  /**
   * renders a spinner to be show when a search is underway
   * @returns {JSX} <Spinner>
   */
  renderLoading(){
    return (
      <Spinner animation="border" variant="primary"/>
    )
  }

  render(){
    let content

    if (!this.props.hasSearched){
      content = this.renderInitial()

    } else if (this.props.hasError) {
      content = this.renderError()
    
    } else if (this.props.loading) {
      content = this.renderLoading()
    
    } else if(this.props.results.length === 0) {
      content = this.renderEmpty()
    
    } else {
      content = this.renderList()
    }
    return(
      <div id="results">
        {content}
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  results: state.results,
  hasSearched: state.numSearches > 0,
  hasError: state.readiness === -1,
  loading: state.readiness === 0
})

export default connect(
  mapStateToProps
)(ResultsList)