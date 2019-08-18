import React from 'react'
import { ResponsiveEmbed } from 'react-bootstrap'

import { connect } from 'react-redux'

class Player extends React.Component {


  renderPlayer() {
    const videoURL = `https://www.youtube.com/embed/${this.props.videoId}?autoplay=1`
    return (
      <ResponsiveEmbed aspectRatio="4by3">
        <iframe title="player" src={videoURL} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </ResponsiveEmbed>
    )
  }

  render(){
    const content = this.props.videoId ? this.renderPlayer() : null
    return (
      <div id="player">
        {content}
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