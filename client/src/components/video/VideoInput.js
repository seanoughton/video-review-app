import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addVideo } from  '../../actions/videoActions';

class VideoInput extends Component {

  state = {
    url: '',
    version: '',
    video_name: '',
    project_id: this.props.id //this.props.projectId
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

    if (event.target.id === 'version') {
      this.setState({
        version: event.target.value,
      });// end setState
    }// end if



  }




  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addVideo(this.state)
    this.setState({
      video_name: '',
      url:'',
      version: ''
    });
  }



  render() {

    return (
      <div>
        <div>
          <h2 class="text-white">Add a Video</h2>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>

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

          </form>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { videos: state.videos}
}


const mapDispatchToProps = dispatch => ({
  addVideo: (video_state) => dispatch(addVideo(video_state))
})

export default connect(mapStateToProps,mapDispatchToProps)(VideoInput)
