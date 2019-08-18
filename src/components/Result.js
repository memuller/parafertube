import React from 'react'
import { Media } from 'react-bootstrap'

class Result extends React.Component {

  render(){
    return (
      <Media as="li" className="result mb-2">
        <img src={this.props.data.snippet.thumbnails.default.url}
        alt="thumbnail" className="mr-2"
        />
        <Media.Body>
          <h5>{this.props.data.snippet.title}</h5>
          <p>{this.props.data.snippet.description}</p>
        </Media.Body>
      </Media>
    )
  }
}

export default Result