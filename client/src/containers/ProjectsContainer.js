import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { deleteProject } from  '../actions/projectActions';

import Project from '../components/project/ProjectComponent'
import ProjectInput from '../components/project/ProjectInput'



class ProjectsContainer extends Component {


  render() {

    let allProjects = this.props.projects.projects
    let userProjects = this.props.current_user.projects
    //let projectIds = userProjects.map( project => project.id)
    //let projects = []
    //projectIds.forEach( element => projects.push( allProjects.find( project => project.id === element)))
    

    let displayProjects = userProjects.map( (project,index) =>
        <div class="card" key={index}>
          <div class="card-body">
            <h5 class="card-title">{project.project_name}</h5>
            <p class="card-text">{project.description}</p>
            <Link to={`/projects/${project.id}`} class="btn btn-primary"> Work on this Project </Link>
          </div>
        </div>)


    return (
      <div class="container-fluid">

        <h1 class="text-white"> All Projects for {this.props.current_user.user_name}</h1>

      <div class="card-group">
        {displayProjects}
      </div>{/** end card-group **/}
        < ProjectInput/>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return { current_user: state.current_user.current_user}
}


export default connect(mapStateToProps)(ProjectsContainer)
//export default ProjectsContainer
