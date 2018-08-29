import React, { Component } from 'react';

class VideoInput extends Component {

  constructor(props) {
       super(props)
       this.state = {
         url: '',
         version: '',
         video_name: '',
         project_id: this.props.id
       }
     }// end constructor


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

    if (event.target.id === 'version') {
      this.setState({
        version: event.target.value,
      });// end setState
    }// end if
  }// end handleOnChange




  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addVideo(this.state)
    this.setState({
      video_name: '',
      url:'',
      version: ''
    });
  }// end handleOnSubmit



  render() {

    return (
      <div>
        <div>
          <h2 class="text-white">Add a Video</h2>

            <div class="form-group mt-4" >
              <form onSubmit={(event) => this.handleOnSubmit(event)}>
              <label for="video_name" class="text-white">Video Name</label>
              <input
                class="form-control"
                type="text"
                id="video_name"
                aria-describedby="videoHelp"
                placeholder="Enter Video Name"
                value={this.state.video_name}
                onChange={(event) => this.handleOnChange(event)}
                />

              <label for="url" class="text-white">URL</label>
                <input
                  class="form-control"
                  type="url"
                  id="url"
                  aria-describedby="urlHelp"
                  placeholder="Enter URL"
                  value={this.state.url}
                  onChange={(event) => this.handleOnChange(event)}
                  />

                <label for="url" class="text-white">Version Number</label>
                <input
                  class="form-control"
                  type="text"
                  id="version"
                  aria-describedby="versionHelp"
                  placeholder="Enter Version Number"
                  value={this.state.version}
                  onChange={(event) => this.handleOnChange(event)}
                  />

              </form>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>

        </div>
      </div>
    )//end return
  }// end render
}// end class definition


export default VideoInput
