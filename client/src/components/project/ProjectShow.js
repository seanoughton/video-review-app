// import React Stuff
import React, { Component } from 'react';

// import components
import VideoInput from '../video/VideoInput'
import VideoInfo from '../video/VideoInfo'
import EditProject from '../../components/project/EditProject';
import NavBarProjects from '../../components/navbar/NavBarProjects';

class ProjectShow extends Component {

  handleDeleteVideo = (event) => {
    event.preventDefault();
    if (window.confirm('Are you sure you wish to delete this item?')){
      this.props.deleteVideo(event.target.dataset.id)
    }
  }// end handleOnClick
  render() {
    //set Defaults
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

    //display all of the videos
    let displayVideos = videos.map( (video,index) =>
      <VideoInfo video={video} key={video.id} handleDeleteVideo={this.handleDeleteVideo}/> )

    return (

      <div className="container-fluid">
        <NavBarProjects />

        <h3 className="text-white">{project.project_name}</h3><br></br>
        <h5 className="text-white">{project.description}</h5><br></br>
        <div className="row">
          {displayVideos}
        </div>

        <div className="row ml-4" id="edit-project">
          <div className="col">
            < EditProject current_user={this.props.current_user} editProject={this.props.editProject} project={project}/>
          </div>
          <div className="col" id="add-video">
            < VideoInput id={projectId} addVideo={this.props.addVideo}/>
          </div>
        </div>

      </div>
    )//end return
  }// end render
}// end class definition


export default ProjectShow
