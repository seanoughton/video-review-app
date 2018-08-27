import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import VideoInput from '../components/video/VideoInput'
import Video from '../components/video/VideoComponent'

class VideosContainer extends Component {



  render() {
    let allVideos = this.props.videos.videos
    let videos = allVideos.map((video,index) => <li key={index}>
      <Link to={`/videos/${video.id}`}>
        {video.video_name}
      </Link>
    </li>)


    return (
      <div>
        <h1> All of the Videos </h1>
        <ul>
          {videos}
        </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { current_user: state.current_user.current_user}
}


export default connect(mapStateToProps)(VideosContainer)
