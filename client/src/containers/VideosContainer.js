/// import React stuff
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/// import Components
import VideoInput from '../components/video/VideoInput'
import VideoShow from '../components/video/VideoShow'
import VideoInfo from '../components/video/VideoInfo'
import NavBarVideos from '../components/navbar/NavBarVideos';

class VideosContainer extends Component {

//fires off deleteVideo action if confirmation
  handleDeleteVideo = (event) => {
    event.preventDefault();
    if (window.confirm('Are you sure you wish to delete this item?')){
      this.props.deleteVideo(event.target.dataset.id)
    }
  }// end handleOnClick

  render() {
    let allVideos = this.props.videos.videos
    let displayVideos = allVideos.map( (video,index) =>
      <VideoInfo video={video} key={video.id} handleDeleteVideo={this.handleDeleteVideo}/> )


    return (
      <div className="container-fluid">
        <NavBarVideos />
        <h1 className="text-white"> Here are all of the Videos: </h1><br></br>
          <div className="row">
              {displayVideos}
          </div>
      </div>
    )
  }// end render
}// end class definition


export default VideosContainer
