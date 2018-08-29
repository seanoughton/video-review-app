/// import React stuff
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

/// import Components
import Comment from '../components/comment/CommentComponent'
import CommentInput from '../components/comment/CommentInput'

class CommentsContainer extends Component {

  render() {
    let allComments = this.props.comments.comments

    let comments = allComments.map( (comment,index) => <li key={index} >
    <Link to={`/comments/${comment.id}`}>
      {comment.content}
    </Link>
    </li>)

    return (
      <div>
        <h1> All Comments </h1>
        <ul>
          {comments}
        </ul>
        < CommentInput/>
      </div>
    )
  }// end render
}// end class definition


export default CommentsContainer
