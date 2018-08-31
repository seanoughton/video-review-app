// import React Stuff
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import components
import VideoInput from '../video/VideoInput'
import NavBarProjects from '../../components/navbar/NavBarProjects';

class Project extends Component {

  handleOnClick = (event) => {
    event.preventDefault();
    if (window.confirm('Are you sure you wish to delete this item?')){
      this.props.deleteVideo(event.target.dataset.id)
    }

  }// end handleOnClick
  render() {

    let project = {project_name:'', id:''}
    let allProjects = this.props.projects.projects
    let projectId = parseInt(this.props.match.params.id,10)
    let projectVideos = ''

    // if the async fetch request has been made and there are projects in the store
    if (allProjects.length > 0) {
      project = allProjects.find(project =>  project.id === projectId)
    }

    // get the videos for this specific project
    let videos = this.props.videos.videos.filter(video=> video.project.id === projectId)

    let displayVideos = videos.map( (video,index) =>
      <div class="col-sm-4" key={index}>
        <div class="card">
          <div class="card-body text-dark">
            <h5 class="card-title">{video.video_name}</h5>
            <p class="card-text">Version {video.version}.</p>
            <Link to={`/videos/${video.id}`} class="btn btn-primary"> Work on this Video </Link>
            <button class="btn btn-danger"  onClick={this.handleOnClick} data-id={video.id}> Delete Video </button>
          </div> {/**end card-body **/}
        </div> {/**end card **/} <br></br>
      </div>)//end col


    return (

      <div class="container-fluid">
        <NavBarProjects />
        <h3 class="text-white">{project.project_name}</h3><br></br>\
        <div class="row">
          {displayVideos}
        </div>

        <div class="row ml-4">
          < VideoInput id={projectId} addVideo={this.props.addVideo}/>
        </div>

      </div>
    )//end return
  }// end render
}// end class definition


export default Project

/**

handleOnClick = () => {
  this.props.deleteProject(this.props.match.params.id,10)
}
<button onClick={this.handleOnClick}> x </button>
**/
