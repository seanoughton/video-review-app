import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchVideos } from  '../actions/videoActions';

import Video from '../components/video/VideoComponent'

class VideosContainer extends Component {

  componentDidMount() {
     this.props.fetchVideos()
   }

  render() {
    console.log(this.props.videos.videos)
    let allVideos = this.props.videos.videos

    let videos = allVideos.map((video,index) => <li> < Video key={index}   video={video}/> </li>)


    return (
      <div>
        <h1> All Videos </h1>
        <ul>
          {videos}
        </ul>

      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { videos: state.videos}
}


const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos())
})

export default connect(mapStateToProps, mapDispatchToProps)(VideosContainer)
