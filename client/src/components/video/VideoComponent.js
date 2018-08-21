import React, { Component } from 'react';

class Video extends Component {


  render() {
    const { video } = this.props;

    return (
      <div>


        {video.video_name}

      </div>
    );
  }
};

export default Video;

/**
  <iframe src={video.url} width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
  **/
