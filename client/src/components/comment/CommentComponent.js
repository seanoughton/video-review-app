import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from  '../../actions/commentActions';

class Comment extends Component {

  handleOnClick = () => {
    //this.props.deleteComment(this.props.comment.id)
    this.props.deleteComment(this.props.match.params.id,10)
  }


  render() {
    let allComments = this.props.comments.comments
    let commentId = parseInt(this.props.match.params.id,10)
    let comment = allComments.find(comment =>  comment.id === commentId)

    return (
      <div>

          {comment.content}
          <button onClick={this.handleOnClick}> x </button>



      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { comments: state.comments}
}

const mapDispatchToProps = dispatch => ({
  deleteComment: comment_id => dispatch(deleteComment(comment_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
//export default Comment;
