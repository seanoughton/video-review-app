import React, { Component } from 'react';


class Comment extends Component {


//set up some logic that if the comments hasn't fired then fire the action from here when the component loads

  render() {
    console.log(this.props)
    let allComments = this.props.comments.comments
    let commentId = parseInt(this.props.match.params.id,10)
    let comment = allComments.find(comment =>  comment.id === commentId)

    return (
      <div>

        <h4>Content: {comment.content} </h4>
        <h4>Comment Id: {comment.id}</h4>
        <h4>Timecode: {comment.timecode}</h4>


      </div>
    );
  }
};



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
