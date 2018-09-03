import React from 'react'
import { Link } from 'react-router-dom';


const VideosList = ({ video,handleOnClick }) =>

<div className="col-sm-4" key={video.id}>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{video.video_name}</h5>
        <button type="button" className="btn btn-success">
          V  <span className="badge badge-light">{video.version}</span>
        </button>
      <Link to={`/videos/${video.id}`} className="btn btn-primary ml-4"> Work on Video</Link>
      <button className="btn btn-danger"  onClick={handleOnClick} data-id={video.id}> Delete Video </button>
    </div> {/**end card-body **/}
  </div> {/**end card **/} <br></br>
</div>//end col and displayVideos


export default VideosList
