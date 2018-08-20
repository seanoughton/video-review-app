import React, { Component } from 'react';

class Project extends Component {


  render() {
    const { project } = this.props;

    return (
      <div>

          {project.project_name}


      </div>
    );
  }
};

export default Project;
