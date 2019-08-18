import React from 'react'

import { connect } from 'react-redux'

import { Card } from 'react-bootstrap'

class ResultsList extends React.Component {
  
  renderList(){
    return this.props.results.map((item) => {
      return (
        <div key={item.id.videoId}>
          {item.snippet.title}
        </div>
      )
    })
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