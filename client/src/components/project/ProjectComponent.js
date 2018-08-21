import React, { Component } from 'react';

class Project extends Component {

  handleOnClick = () => {
    this.props.deleteProject(this.props.project.id)
  }


  render() {
    const { project } = this.props;

    return (
      <div>

          {project.project_name}
          <button onClick={this.handleOnClick}> x </button>


      </div>
    );
  }
};

export default Project;
