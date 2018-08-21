import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from  '../actions/commentActions';
import { addComment } from  '../actions/commentActions';
import { deleteComment } from  '../actions/commentActions';

import Comment from '../components/comment/CommentComponent'
import CommentInput from '../components/comment/CommentInput'

class CommentsContainer extends Component {

  componentDidMount() {
     this.props.fetchComments()
   }

  render() {
    let allComments = this.props.comments.comments

    let comments = allComments.map( (comment,index) => <li key={index} > < Comment    comment={comment} deleteComment={this.props.deleteComment} /> </li>)


    return (
      <div>
        <h1> All Comments </h1>
        <ul>
          {comments}
        </ul>
        < CommentInput
        addComment={this.props.addComment}
        />
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { comments: state.comments}
}


const mapDispatchToProps = dispatch => ({
  fetchComments: () => dispatch(fetchComments()),
  addComment: comment_state => dispatch(addComment(comment_state)),
  deleteComment: comment_id => dispatch(deleteComment(comment_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)
