// import React Stuff
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

//import components
import CommentInput from '../../components/comment/CommentInput'
import VideoApproval from './VideoApproval'
import NavBarVideos from '../../components/navbar/NavBarVideos';
import CommentsList from '../../components/comment/CommentsList'

// import actions
import { deleteComment } from  '../../actions/commentActions';

class Video extends Component {

  handleOnClick = (event) => {
    event.preventDefault();
    let commentUserId = parseInt(event.target.dataset.user,10)
    // if the user who created the comment is the current user then delete the comment else don't
    if (commentUserId === this.props.current_user.id) {
      this.props.deleteComment(event.target.id)
    }
  }


  render() {

    //set defaults
    let video = {url: '', version: '', video_name:'', project_id: '', id:''}
    let allVideos = this.props.videos.videos
    let videoId = parseInt(this.props.match.params.id,10)
    let comments = []
    let videoComments = ''
    let currentUserId = 2
    let project = ''
    let approvalDisplay = <span className="badge badge-danger">Not Approved</span>



    // check if there are videos in the store
    if (allVideos.length > 0) {
      video = allVideos.find(video =>  video.id === videoId)
      project = video.project.project_name
      if (video.approval === true) {
        approvalDisplay = <span className="badge badge-success">Approved</span>
      }
    }

    //check if there are comments in the store, if so get the comments
    // it is done this way rather than grabbing the video comments, because the video comments in the store does not have the user info about who made the comment
    let allComments = this.props.comments.comments
    if (allComments.length > 0){
      comments = allComments.filter(comment => comment.video.id === videoId)
      // get the comments for just this video
      videoComments = comments.map((comment,index) =>
      <CommentsList comment={comment} index={index} handleOnClick={this.handleOnClick} key={comment.id}/> )
    }

    return (
      <div className="container-fluid">
        <NavBarVideos />
        <div className="row"  >
          <div className="col bg-secondary text-white-50 border ml-5">
            <div className="m-4">
                {approvalDisplay}

                <button type="button" className="btn btn-primary">
                  Version <span className="badge badge-light">{video.version}</span>
                </button>

              <iframe src={video.url} width="640" height="360" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>

            </div>
          </div>{/* end col */}

          <div className="col bg-dark text-white m-3">
              <div className="row"  >
                <h4>Add a Comment</h4>
                < CommentInput videoId={videoId} currentUserId={this.props.current_user.id}/>
            </div>{/**end row **/}
             <br></br>
              <div className="row"  >
                < VideoApproval video={video}/>
              </div>{/**end row **/}
          </div>{/* end col */}

        </div>{/* end row */}


        <div className="row"  >
          <div className="col bg-dark text-white border commentsList ">
              <h4 >Comments</h4>
              <span className="badge badge-info">{comments.length} Comments</span>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">TC</th>
                      <th scope="col">Comment</th>
                      <th scope="col">User</th>
                      <th scope="col"></th>
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


export default connect(state => ({ videos: state.videos, comments: state.comments, current_user: state.current_user.current_user}), { deleteComment })(Video);


/**
const mapStateToProps = (state) => {
  return { videos: state.videos, comments: state.comments, current_user: state.current_user.current_user}
}

const mapDispatchToProps = dispatch => ({
  deleteComment: comment_state => dispatch(deleteComment(comment_state))
})


export default connect(mapStateToProps,mapDispatchToProps)(Video)
//export default connect(mapStateToProps, { deleteComment })(Video);
**/
