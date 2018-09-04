// import React Stuff
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import components
import VideoInput from '../video/VideoInput'
import VideosList from '../video/VideosList'
import EditProject from '../../components/project/EditProject';
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
      <VideosList video={video} key={video.id} handleOnClick={this.handleOnClick}/> )

    return (

      <div className="container-fluid">
        <NavBarProjects />

        <h3 className="text-white">{project.project_name}</h3><br></br>
        <h5 className="text-white">{project.description}</h5><br></br>
        <div className="row">
          {displayVideos}
        </div>

        <div className="row ml-4">
          <div className="col">
            < EditProject current_user={this.props.current_user} editProject={this.props.editProject} project={project}/>
          </div>
          <div className="col">
            < VideoInput id={projectId} addVideo={this.props.addVideo}/>
          </div>
        </div>

      </div>
    )//end return
  }// end render
}// end class definition


export default Project
