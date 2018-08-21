import React, { Component } from 'react';

class Video extends Component {

  handleOnClick = () => {
    this.props.deleteVideo (this.props.video.id)
  }

  render() {
    const { video } = this.props;

    return (
      <div>


        {video.video_name}
        <button onClick={this.handleOnClick}> x </button>
      </div>
    );
  }
};

export default Video;

/**
  <iframe src={video.url} width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
  **/
