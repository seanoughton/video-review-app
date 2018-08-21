import React, { Component } from 'react';

class CommentUpdate extends Component {

  state = {
    content: '',
    user_id: 1,
    team_id: 1,
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

export default CommentUpdate;
