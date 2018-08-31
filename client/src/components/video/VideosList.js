import React from 'react'
import { Link } from 'react-router-dom';


const VideosList = ({ video,handleOnClick }) =>

<div class="col-sm-4" key={video.id}>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{video.video_name}</h5>
        <button type="button" class="btn btn-success">
          V  <span class="badge badge-light">{video.version}</span>
        </button>
      <Link to={`/videos/${video.id}`} class="btn btn-primary ml-4"> Work on Video</Link>
      <button class="btn btn-danger"  onClick={handleOnClick} data-id={video.id}> Delete Video </button>
    </div> {/**end card-body **/}
  </div> {/**end card **/} <br></br>
</div>//end col and displayVideos


export default VideosList
