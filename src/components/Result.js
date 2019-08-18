import React from 'react'
import { Media } from 'react-bootstrap'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectVideo as selectVideoAction } from './../store/actions'

class Result extends React.Component {

  constructor(props){
    super(props)
    this.selectVideo = this.selectVideo.bind(this)
  }

  selectVideo(){
    this.props.selectVideo(
      this.props.data.id.videoId
    )
  }

  render(){
    return (
      <Media as="li" className="result mb-4" onClick={this.selectVideo}>
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

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  selectVideo: selectVideoAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result)