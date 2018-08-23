import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteProject } from  '../../actions/projectActions';

class Project extends Component {



  handleOnClick = () => {
    //this.props.deleteProject(this.props.project.id)
    this.props.deleteProject(this.props.match.params.id,10)
    //find a way to reroute this to the projects index page
  }





  render() {

    let allProjects = this.props.projects.projects
    let projectId = parseInt(this.props.match.params.id,10)
    let project = allProjects.find(project =>  project.id === projectId)

    let projectVideos = project.videos.map((video,index) => <li key={index}>
    <Link to={`/videos/${video.id}`}>
      {video.video_name}
    </Link>
    </li>)


    return (

      <div>
        {project.project_name}

        <button onClick={this.handleOnClick}> x </button>

          <h3>Here all of this project's videos</h3>
          {projectVideos}


      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { projects: state.projects}
}

const mapDispatchToProps = dispatch => ({
  deleteProject: project_id => dispatch(deleteProject(project_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Project)
