import React, { Component } from 'react';

class VideoInput extends Component {

  state = {
    video_name: '',
    url: '',
    user_id: 1,
    team_id:1,
    project_id: 1
  }

  handleOnChange(event) {
    if (event.target.id === 'video_name') {
      this.setState({
        video_name: event.target.value,
      });// end setState
    }// end if

    if (event.target.id === 'url') {
      this.setState({
        url: event.target.value,
      });// end setState
    }// end if



  }




  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addVideo(this.state)
    this.setState({
      video_name: '',
      url:''
    });
  }



  render() {
    return (
      <div>
        <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <label>Video Name</label>

            <input
              id="video_name"
              type="text"
              value={this.state.user_name}
              onChange={(event) => this.handleOnChange(event)} /><br></br>

              <label>URL</label>
              <input
                id="url"
                type="text"
                value={this.state.email}
                onChange={(event) => this.handleOnChange(event)} /><br></br>



            <br></br>
            <br></br>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
};

export default VideoInput;
