// import React Stuff
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

//import components
import CommentInput from '../../components/comment/CommentInput'
import VideoApproval from './VideoApproval'

class Video extends Component {
  render() {

    let video = {url: '', version: '', video_name:'', project_id: '', id:''}
    let allVideos = this.props.videos.videos
    let videoId = parseInt(this.props.match.params.id,10)
    let comments = []
    let videoComments = ''
    let currentUserId = 2
    let project = ''
    let approvalDisplay = <span class="badge badge-danger">Not Approved</span>

    // check if there are videos in the store
    if (allVideos.length > 0) {
      video = allVideos.find(video =>  video.id === videoId)
      project = video.project.project_name
      if (video.approval === true) {
        approvalDisplay = <span class="badge badge-success">Approved</span>
      }
    }

    //check if there are comments in the store
    let allComments = this.props.comments.comments
    if (allComments.length > 0){
      comments = allComments.filter(comment => comment.video.id === videoId)
      videoComments = comments.map((comment,index) =>
      <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{comment.timecode}</td>
        <td>{comment.content}</td>
        <td>@{comment.user.user_name}</td>
      </tr>)
    }

    return (
      <div class="container">

        <div class="row"  >
          <div class="col bg-secondary text-white-50 border">
            <div class="m-4">
                {approvalDisplay}

                <button type="button" class="btn btn-primary">
                  Version <span class="badge badge-light">{video.version}</span>
                </button>

              <iframe src={video.url} width="640" height="360" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>

            </div>
          </div>{/* end col */}

          <div class="col bg-dark text-white m-3">
              <div class="row"  >
                <h4>Add a Comment</h4>
                < CommentInput videoId={videoId} currentUserId={currentUserId}/>
            </div>{/**end row **/}
             <br></br>
              <div class="row"  >
                < VideoApproval video={video}/>
              </div>{/**end row **/}
          </div>{/* end col */}

        </div>{/* end row */}


        <div class="row"  >
          <div class="col bg-dark text-white border commentsList ">
              <h4 >Comments</h4>
              <span class="badge badge-info">{comments.length} Comments</span>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">TC</th>
                      <th scope="col">Comment</th>
                      <th scope="col">User</th>
                    </tr>
                  </thead>
                  <tbody>
                    {videoComments}
                  </tbody>
                </table>
          </div>{/* end col */}
        </div>{/* end row */}



    </div>// end container


    )//end return
  }// end render
}// end class definition

const mapStateToProps = (state) => {
  return { videos: state.videos, comments: state.comments, current_user: state.current_user.current_user}
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
