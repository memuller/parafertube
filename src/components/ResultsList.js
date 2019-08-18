import React from 'react'

import { connect } from 'react-redux'

import { Card } from 'react-bootstrap'
import Result from './Result'

class ResultsList extends React.Component {
  
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

  render(){
    let content
    if (!this.props.hasSearched){
      content = this.renderInitial()
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
  hasSearched: state.numSearches > 0
})

export default connect(
  mapStateToProps
)(ResultsList)