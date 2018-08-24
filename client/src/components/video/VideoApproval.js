import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateVideo } from  '../../actions/videoActions';


class VideoApproval extends Component {

  state = {
    approval: '',
    id: 1
  }

  handleOnChange(event) {
    let video = this.props.video
    if (event.target.id === 'approval') {
      this.setState({
        id: video.id,
        url: video.url,
        version: video.version,
        video_name: video.video_name,
        approval: event.target.value,
        project_id: video.project_id

      });// end setState
    }// end if


  }


  handleOnSubmit(event) {
    event.preventDefault();
    this.props.updateVideo(this.state)
    //this.props.addVideo(this.state)
    this.setState({
      approval: ''
    });
  }



  render() {
    return (
      <div>
        <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <label>Approval</label>

            <input
              id="approval"
              type="text"
              value={this.state.approval}
              onChange={(event) => this.handleOnChange(event)} />
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
  updateVideo: (video_state) => dispatch(updateVideo(video_state))
})

export default connect(mapStateToProps,mapDispatchToProps)(VideoApproval)
