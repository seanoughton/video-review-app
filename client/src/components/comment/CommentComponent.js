/// import React stuff
import React, { Component } from 'react';

class Comment extends Component {

  render() {

    //set default values
    let comment = {content:'', id:'', timecode:''}
    let allComments = this.props.comments.comments
    let commentId = parseInt(this.props.match.params.id,10)

    // if there are comments in the store, then find individual comment
    if (allComments.length > 0) {
      comment = allComments.find(comment =>  comment.id === commentId)
    }

    return (
      <div>

        <h4>Content: {comment.content} </h4>
        <h4>Comment Id: {comment.id}</h4>
        <h4>Timecode: {comment.timecode}</h4>

      </div>
    )//end return
  }// end render
}// end class definition



export default Comment


//export default Comment;
/**


import { deleteComment } from  '../../actions/commentActions';

handleOnClick = () => {
  //this.props.deleteComment(this.props.comment.id)
  this.props.deleteComment(this.props.match.params.id,10)
}

<button onClick={this.handleOnClick}> x </button>


**/
