import React from 'react'
import { ResponsiveEmbed } from 'react-bootstrap'

import { connect } from 'react-redux'

class Player extends React.Component {
  
  render(){
    const videoURL = `https://www.youtube.com/embed/${this.props.videoId}?autoplay=1`
    return (
      <div id="player">
        <ResponsiveEmbed aspectRatio="4by3">
          <iframe title="player" src={videoURL} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </ResponsiveEmbed>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  videoId: state.selectedVideoId
})

export default connect(
  mapStateToProps
)(Player)