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

  handleOnClick(event) {
    event.preventDefault();
    if (event.target.id === "approved") {
      this.state.approval = true
      this.props.updateVideo(this.state)
    } else {
      this.state.approval = false
      this.props.updateVideo(this.state)
    }
  }



  render() {
    return (
      <div>


        <div class="dropdown">
          <button
            class="btn btn-info dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >
            Approve
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item " href="#" id="approved" onClick={(event) => this.handleOnClick(event)} >Approved</a>
            <a class="dropdown-item" href="#" id="not_approved" onClick={(event) => this.handleOnClick(event)} >Needs more work</a>
          </div>
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
