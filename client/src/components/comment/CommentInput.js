import React, { Component } from 'react';

class CommentInput extends Component {

  state = {
    content: '',
    project_id: 1,
    user_id: 1
  }

  handleOnChange(event) {
    this.setState({
      content: event.target.value,
    });
  }




  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addComment(this.state.content);
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

export default CommentInput;
