// import React Stuff
import React, { Component } from 'react';
import { connect } from 'react-redux'

// import actions
import { updateVideo } from  '../../actions/videoActions';

class VideoApproval extends Component {
  constructor(props) {
       super(props)
       this.state = {
         approval: '',
         id: this.props.video.id
       }
     }// end constructor


  handleApproval(event) {
    event.preventDefault();
    if (event.target.id === "approved") {
      this.state.approval = true
      this.props.updateVideo(this.state)
    } else {
      this.state.approval = false
      this.props.updateVideo(this.state)
    }
  }// end handleOnClick

  render() {
    return (
      <div>
        <div className="dropdown">
          <button
            className="btn btn-info dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >
            Approve
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item " href="#" id="approved" onClick={(event) => this.handleApproval(event)} >Approved</a>
            <a className="dropdown-item" href="#" id="not_approved" onClick={(event) => this.handleApproval(event)} >Needs more work</a>
          </div>
        </div>

      </div>
    )//end return
  }// end render
}// end class definition

const mapStateToProps = (state) => {
  return { videos: state.videos}
}


const mapDispatchToProps = dispatch => ({
  updateVideo: (video_state) => dispatch(updateVideo(video_state))
})

export default connect(mapStateToProps,mapDispatchToProps)(VideoApproval)
