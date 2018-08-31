/// import React stuff
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

/// import actions
import { deleteProject } from  '../actions/projectActions';
import { addProject } from  '../actions/projectActions';

/// import Components
import Project from '../components/project/ProjectComponent'
import ProjectInput from '../components/project/ProjectInput'

import NavBarProjects from '../components/navbar/NavBarProjects';


class ProjectsContainer extends Component {

  // when add yourself to this project is clicked, it should fire off an action to add a project to a users project list in the database and also update the store for the users projects, which is really updating the user

  // test to see if the current user is in the projects user list
  // if so button says work on this project => else button says add yourself to this project


    handleOnClick(event) {
      event.preventDefault();
      console.log('clicked')
    }// end handleOnClick

  render() {

    let projects = []
    let displayProjects = ''

    //test to see if this user has any projects and if assign them
    if (this.props.current_user.projects){
      projects = this.props.projects
    }

    displayProjects = projects.map( (project,index) =>
       <div class="col-sm-4" key={index}>
         <div class="card">
           <div class="card-body">
             <h5 class="card-title">{project.project_name}</h5>
             <p class="card-text">{project.description}</p>
             <Link to={`/projects/${project.id}`} class="btn btn-primary"> Work on this Project </Link>
             
           </div> {/**end card-body **/}
         </div> {/**end card **/} <br></br>
       </div>)//end col


    return (
      <div class="container-fluid">
        <NavBarProjects />
        <h1 class="text-white"> Here are all of the projects: </h1><br></br>
          <div class="row">
              {displayProjects}
          </div>

      </div>
    )
  }// end render
}// end class definition

const mapStateToProps = (state) => {
  return { current_user: state.current_user.current_user, projects: state.projects.projects}
}

const mapDispatchToProps = dispatch => ({
  addProject: project_state => dispatch(addProject(project_state))
})


export default connect(mapStateToProps,mapDispatchToProps)(ProjectsContainer)

/**
let projects = []
let displayProjects = ''
//test to see if this user has any projects and if assign them
if (this.props.projects){
  projects = this.props.projects
  displayProjects = projects.map( (project,index) =>
        <div class="col-sm-4" key={index}>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{project.project_name}</h5>
              <p class="card-text">{project.description}</p>
              <Link to={`/projects/${project.id}`} class="btn btn-primary"> Add Yourself to This Project </Link>
            </div>
          </div><br></br>
        </div>)//end col
}

**/
