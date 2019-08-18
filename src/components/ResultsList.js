import React from 'react'

import { connect } from 'react-redux'

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

  render(){
    let 
      content = this.renderList()

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