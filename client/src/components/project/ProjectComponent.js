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


    let videos = allVideos.filter(video=> video.project.id === projectId)

    let displayVideos = videos.map( (video,index) =>
      <div class="col-sm-4" key={index}>
        <div class="card">
          <div class="card-body text-dark">
            <h5 class="card-title">{video.video_name}</h5>
            <p class="card-text">Version {video.version}.</p>
            <Link to={`/videos/${video.id}`} class="btn btn-primary"> Work on this Video </Link>
          </div> {/**end card-body **/}
        </div> {/**end card **/} <br></br>
      </div>)//end col




    return (

      <div class="container-fluid">
        <h3 class="text-white">{project.project_name}</h3><br></br>

        <div class="row">
          {displayVideos}
        </div>


        <div class="row ml-4">
          < VideoInput id={projectId}/>
        </div>

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { projects: state.projects, videos: state.videos, current_user: state.current_user}
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
