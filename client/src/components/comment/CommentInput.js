/// import React stuff
import React, { Component } from 'react';
import { connect } from 'react-redux';

/// import actions
import { addComment } from  '../../actions/commentActions';

class CommentInput extends Component {

  constructor(props) {
       super(props)
       this.state = {
         content: '',
         timecode: '',
         user_id: this.props.currentUserId,
         video_id: this.props.videoId
       }
     }


  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addComment(this.state);
    this.setState({
      content: '',
      timecode: ''
    })// end setState
  }


  render() {
    return (
      <div class="container">
        <div class="row"  >
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <div class="form-group">
              <label> Timecode (Hr:Mn:Sec)</label>
              <input
                class="form-control"
                id="timecode"
                name="timecode"
                type="text"
                pattern="\d{2}:{1}\d{2}:{1}\d{2}"
                aria-describedby="timecode"
                placeholder="00:00:00"
                value={this.state.timecode}
                onChange={(event) => this.handleOnChange(event)}
                required
                />
            </div> {/** end form group**/}

            <div class="form-group">
              <label> Comment </label>
              <input
                class="form-control"
                id="content"
                name="content"
                aria-describedby="content"
                placeholder="Comment"
                type="text"
                value={this.state.content}
                onChange={(event) => this.handleOnChange(event)}
                required
                />
            </div> {/** end form group**/}

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div> {/**end row **/}
      </div> // end container

    )// end return
  }// end render
}// end class definition

const mapStateToProps = (state) => {
  return { comments: state.comments}
}

const mapDispatchToProps = dispatch => ({
  addComment: comment_state => dispatch(addComment(comment_state))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput)

/**

**/
