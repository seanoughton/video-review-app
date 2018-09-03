/// import React stuff
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

/// import Components
import VideoInput from '../components/video/VideoInput'
import Video from '../components/video/VideoComponent'
import VideosList from '../components/video/VideosList'
import NavBarVideos from '../components/navbar/NavBarVideos';

class VideosContainer extends Component {

  handleOnClick = (event) => {
    event.preventDefault();
    if (window.confirm('Are you sure you wish to delete this item?')){
      this.props.deleteVideo(event.target.dataset.id)
    }
  }// end handleOnClick

  render() {
    let allVideos = this.props.videos.videos
    let displayVideos = allVideos.map( (video,index) =>
      <VideosList video={video} key={video.id} handleOnClick={this.handleOnClick}/> )


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
