import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from  '../../actions/commentActions';

class CommentInput extends Component {

  state = {
    content: '',
    timecode: '',
    user_id: this.props.currentUserId,
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
      <div class="container">
        <div class="row"  >
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <div class="form-group">

              <input
                class="form-control"
                id="timecode"
                type="text"
                aria-describedby="timecode"
                placeholder="Timecode"
                value={this.state.timecode}
                onChange={(event) => this.handleOnChange(event)} />
            </div> {/** end form group**/}

            <div class="form-group">

              <input
                class="form-control"
                id="content"
                aria-describedby="content"
                placeholder="Comment"
                type="text"
                value={this.state.content}
                onChange={(event) => this.handleOnChange(event)} />
            </div> {/** end form group**/}

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div> {/**end row **/}
      </div> // end container

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
