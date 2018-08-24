import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CommentInput from '../../components/comment/CommentInput'


class Video extends Component {

  handleOnClick = () => {
    //this.props.deleteVideo (this.props.video.id)
    this.props.deleteVideo(this.props.match.params.id,10)
    //find a way to reroute this to the projects index page
  }

  render() {
    let allVideos = this.props.videos.videos
    let videoId = parseInt(this.props.match.params.id,10)
    let video = allVideos.find(video =>  video.id === videoId)

    let allComments = this.props.comments.comments
    //filter all of the comments based on the video
    let comments = allComments.filter(comment => comment.video.id === videoId)
    let videoComments = comments.map((comment,index) => <li key={index}>
    <Link to={`/comments/${comment.id}`}>
      {comment.content} 
    </Link>
    </li>)

    console.log(comments)


    return (
      <div>

        <h4>Video Name {video.video_name} </h4>
        <h4>Video Id: {video.id}</h4>

        <h4>Video Version {video.version}</h4>
        <iframe src={video.url} width="640" height="360" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>

        < CommentInput videoId={videoId}/>

        <h3>Here all of the comments for this video</h3>
        {videoComments}



      <br></br>

      </div>
    );
  }
};



export default Video

/**
<button onClick={this.handleOnClick}> x </button>

  **/
