import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateVideo } from  '../../actions/videoActions';
import NavBarVideos from '../../components/navbar/NavBarVideos';

class VideoInput extends Component {
// find the video from teh store

  constructor(props) {
       super(props)
       let video = this.props.videos.find( video => video.id === parseInt(this.props.match.params.id,10))
       this.state = {
         id: video.id,
         url: video.url,
         version: video.version,
         video_name: video.video_name,
         project_id: video.project_id
       }
     }// end constructor


  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }// end handleOnChange




  handleOnSubmit(event) {
    event.preventDefault();
    this.props.updateVideo(this.state)
    this.setState({
      video_name: '',
      url:'',
      version: ''
    });
  }// end handleOnSubmit



  render() {

    return (
      <div>
        <NavBarVideos />
        <div>
          <h2 className="text-white">Edit Video</h2>

            <div className="form-group mt-4" >
              <form onSubmit={(event) => this.handleOnSubmit(event)}>
              <label htmlFor="video_name" className="text-white">Video Name</label>
              <input
                className="form-control"
                type="text"
                id="video_name"
                name="video_name"
                aria-describedby="videoHelp"
                placeholder="Enter Video Name"
                value={this.state.video_name}
                onChange={(event) => this.handleOnChange(event)}
                />

              <label htmlFor="url" className="text-white">URL</label>
                <input
                  className="form-control"
                  type="url"
                  id="url"
                  name="url"
                  aria-describedby="urlHelp"
                  placeholder="Enter URL"
                  value={this.state.url}
                  onChange={(event) => this.handleOnChange(event)}
                  />

                <label htmlFor="url" className="text-white">Version Number</label>
                <input
                  className="form-control"
                  type="text"
                  id="version"
                  name="version"
                  aria-describedby="versionHelp"
                  placeholder="Enter Version Number"
                  value={this.state.version}
                  onChange={(event) => this.handleOnChange(event)}
                  />
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>



        </div>
      </div>
    )//end return
  }// end render
}// end class definition


const mapStateToProps = (state) => {
  return { videos: state.videos.videos}
}

const mapDispatchToProps = dispatch => ({
  updateVideo: video_state => dispatch(updateVideo(video_state))
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoInput)
