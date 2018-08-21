import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchVideos } from  '../actions/videoActions';
import { addVideo } from  '../actions/videoActions';
import { deleteVideo } from  '../actions/videoActions';


import VideoInput from '../components/video/VideoInput'
import Video from '../components/video/VideoComponent'

class VideosContainer extends Component {

  componentDidMount() {
     this.props.fetchVideos()
   }

  render() {
    console.log(this.props.videos.videos)
    let allVideos = this.props.videos.videos

    let videos = allVideos.map((video,index) => <li key={index}> < Video video={video} deleteVideo={this.props.deleteVideo}  /> </li>)


    return (
      <div>
        <h1> All Videos </h1>
        <ul>
          {videos}
        </ul>
        < VideoInput addVideo={this.props.addVideo}/>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { videos: state.videos}
}


const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos()),
  addVideo: (video_state) => dispatch(addVideo(video_state)),
  deleteVideo: video_id => dispatch(deleteVideo(video_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(VideosContainer)
