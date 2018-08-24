import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import VideoInput from '../video/VideoInput'

import { deleteProject } from  '../../actions/projectActions';

class Project extends Component {



  render() {
    let project = {project_name:'', id:''}
    let allProjects = this.props.projects.projects
    let projectId = parseInt(this.props.match.params.id,10)
    let projectVideos = ''

    if (allProjects.length > 0) {
      project = allProjects.find(project =>  project.id === projectId)

    }

    let allVideos = this.props.videos.videos
    if (allVideos.length > 0){
      let videos = allVideos.filter(video=> video.project.id === projectId)
      projectVideos = videos.map((video,index) => <li key={index}>
      <Link to={`/videos/${video.id}`}>
        {video.video_name}
      </Link>
      </li>)
    }


    return (

      <div>
        {project.project_name}



          <h3>Here all of this project's videos</h3>
          {projectVideos}

          <h2>Add a Video</h2>
          < VideoInput id={projectId}/>


      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { projects: state.projects, videos: state.videos}
}

const mapDispatchToProps = dispatch => ({
  deleteProject: project_id => dispatch(deleteProject(project_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Project)

/**

projectVideos = project.videos.map((video,index) => <li key={index}>
<Link to={`/videos/${video.id}`}>
  {video.video_name}
</Link>
</li>)

handleOnClick = () => {
  //this.props.deleteProject(this.props.project.id)
  this.props.deleteProject(this.props.match.params.id,10)
  //find a way to reroute this to the projects index page
}
<button onClick={this.handleOnClick}> x </button>
**/
