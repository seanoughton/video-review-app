import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteVideo } from  '../../actions/videoActions';

class Video extends Component {

  handleOnClick = () => {
    //this.props.deleteVideo (this.props.video.id)
    this.props.deleteVideo(this.props.match.params.id,10)
    //find a way to reroute this to the projects index page
  }

  render() {
    let allVideos = this.props.videos.videos
    let videoId = parseInt(this.props.match.params.id,10)
    let video = allVideos.find(video =>  video.id === videoId)

    return (
      <div>


        {video.video_name}
        <button onClick={this.handleOnClick}> x </button>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { videos: state.videos}
}

const mapDispatchToProps = dispatch => ({
  deleteVideo: video_id => dispatch(deleteVideo(video_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Video)

/**
  <iframe src={video.url} width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
  **/
