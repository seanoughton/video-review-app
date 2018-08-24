import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import CommentInput from '../../components/comment/CommentInput'
import VideoApproval from './VideoApproval'


class Video extends Component {



  render() {
    let video = {url: '', version: '', video_name:'', project_id: '', id:''}
    let approval = 'Not Approved'
    let allVideos = this.props.videos.videos
    let videoId = parseInt(this.props.match.params.id,10)

    if (allVideos.length > 0) {
      video = allVideos.find(video =>  video.id === videoId)
      if (video.approval === true) {
        approval = "Approved"
      }
    }

    let allComments = this.props.comments.comments
    let comments = allComments.filter(comment => comment.video.id === videoId)
    let videoComments = comments.map((comment,index) => <li key={index}>
    <Link to={`/comments/${comment.id}`}>
      {comment.content}
    </Link>
    </li>)


      

    return (

      <div>

        <h4>Video Name {video.video_name} </h4>
        <h4>Video Id: {video.id}</h4>
        <h4>Video Version {video.version}</h4>
        <h4>Video Approval {approval}</h4>
        <iframe src={video.url} width="640" height="360" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>

        < CommentInput videoId={videoId}/><br></br>

        < VideoApproval video={video}/>

        <h3>Here all of the comments for this video</h3>
        {videoComments}



      <br></br>

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { videos: state.videos, comments: state.comments}
}

export default connect(mapStateToProps)(Video)

/**

handleOnClick = () => {
  //this.props.deleteVideo (this.props.video.id)
  this.props.deleteVideo(this.props.match.params.id,10)
  //find a way to reroute this to the projects index page
}
<button onClick={this.handleOnClick}> x </button>

  **/
