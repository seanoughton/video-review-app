import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from  '../../actions/commentActions';

class CommentInput extends Component {

  state = {
    content: '',
    timecode: 0,
    user_id: 1,
    video_id: 1
  }

  handleOnChange(event) {
    this.setState({
      content: event.target.value,
    });
  }




  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addComment(this.state);
    this.setState({
      content: '',
    });
  }



  render() {
    return (
      <div>
        <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <label>Enter Comment</label><br></br>
            <input
              type="text"
              value={this.state.content}
              onChange={(event) => this.handleOnChange(event)} />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { comments: state.comments}
}


const mapDispatchToProps = dispatch => ({
  addComment: comment_state => dispatch(addComment(comment_state))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput)
