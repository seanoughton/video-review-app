import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addVideo } from  '../../actions/videoActions';

class VideoInput extends Component {

  state = {
    url: '',
    version: '',
    video_name: '',
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
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <label>Video Name</label>

            <input
              id="video_name"
              type="text"
              value={this.state.video_name}
              onChange={(event) => this.handleOnChange(event)} />
            <br></br>

              <label>URL</label>
              <input
                id="url"
                type="text"
                value={this.state.url}
                onChange={(event) => this.handleOnChange(event)} />
              <br></br>

                <label>Version</label>
                <input
                  id="version"
                  type="text"
                  value={this.state.version}
                  onChange={(event) => this.handleOnChange(event)} />
                <br></br>



            <br></br>
            <br></br>
            <input type="submit" />
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
