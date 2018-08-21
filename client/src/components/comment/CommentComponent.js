import React, { Component } from 'react';

class Comment extends Component {

  handleOnClick = () => {
    this.props.deleteComment(this.props.comment.id)
  }


  render() {
    const { comment } = this.props;

    return (
      <div>

          {comment.content}
          <button onClick={this.handleOnClick}> x </button>

      </div>
    );
  }
};

export default Comment;
