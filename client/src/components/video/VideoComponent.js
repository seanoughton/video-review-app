import React, { Component } from 'react';

class Video extends Component {


  render() {
    const { video } = this.props;

    return (
      <div>

          <iframe src={video.url} width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>


      </div>
    );
  }
};

export default Video;
