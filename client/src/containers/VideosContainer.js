/// import React stuff
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

/// import Components
import VideoInput from '../components/video/VideoInput'
import Video from '../components/video/VideoComponent'

class VideosContainer extends Component {

  render() {
    let allVideos = this.props.videos.videos

    let displayVideos = allVideos.map((video,index) =>
          <div class="col-sm-4" key={index}>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{video.video_name}</h5>
                  <button type="button" class="btn btn-success">
                    V  <span class="badge badge-light">{video.version}</span>
                  </button>
                <Link to={`/videos/${video.id}`} class="btn btn-primary ml-4"> Work on Video</Link>
              </div> {/**end card-body **/}
            </div> {/**end card **/} <br></br>
        </div>)//end col and displayVideos


    return (
      <div class="container-fluid">
        <h1 class="text-white"> Here are all of the Videos: </h1><br></br>
          <div class="row">
              {displayVideos}
          </div>
      </div>
    )
  }// end render
}// end class definition


export default VideosContainer
