import React from 'react'
import { Link } from 'react-router-dom';


const VideoInfo = ({ video,handleDeleteVideo }) =>

<div className="col-sm-4" key={video.id}>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{video.video_name}</h5>
        <button type="button" className="btn btn-success">
          V  <span className="badge badge-light">{video.version}</span>
        </button>
      <Link to={`/videos/${video.id}`} className="btn btn-primary ml-4"> Work on Video</Link>
      <Link to={`/videos/${video.id}/edit`} className="btn btn-warning ml-2"> Edit </Link>
      <button className="btn btn-danger"  onClick={handleDeleteVideo} data-id={video.id}> Delete Video </button>
    </div> {/**end card-body **/}
  </div> {/**end card **/} <br></br>
</div>//end col and displayVideos


export default VideoInfo
