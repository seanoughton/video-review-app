import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from  '../../actions/commentActions';

class CommentInput extends Component {

  state = {
    content: '',
    timecode: '',
    user_id: 1,
    video_id: this.props.videoId
  }

  handleOnChange(event) {

    if (event.target.id === 'timecode') {
      this.setState({
        timecode: event.target.value,
      });// end setState
    }// end if

    if (event.target.id === 'content') {
      this.setState({
        content: event.target.value,
      });// end setState
    }// end if


  }




  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addComment(this.state);
    this.setState({
      content: '',
      timecode: ''
    });
  }



  render() {
    return (
      <div>
        <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>

            <label>Enter TimeCode</label><br></br>
            <input
              id="timecode"
              type="text"
              value={this.state.timecode}
              onChange={(event) => this.handleOnChange(event)} /><br></br>

            <label>Enter Comment</label><br></br>
            <input
              id="content"
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
