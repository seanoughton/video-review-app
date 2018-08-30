// import React stuff
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProjectInput from '../../components/project/ProjectInput'
import NavBarUsers from '../../components/navbar/NavBarUsers';

class User extends Component {

  handleOnClick = (event) => {
    event.preventDefault();
    let projectId = parseInt(event.target.dataset.project,10)
    this.props.deleteProject(projectId)
  }// end handleOnClick

  render() {

    let user = {user_name:'', email:'', password:'', id:''}
    let allUsers = this.props.users.users
    let userId = parseInt(this.props.match.params.id,10)
    let editProfileButton
    let displayUserProjects
    let createProject
    let projectHeader
    let userProjects = []

    // test to see if the async request for fetching all of the users has been made by testing to see if there are any users in the store
    if (allUsers.length > 0) {
      user = allUsers.find(user =>  user.id === userId)
    }


    //test to see if this user has any projects and if assign them
    if (this.props.current_user.current_user.projects){
      userProjects = this.props.current_user.current_user.projects
    }

    if (user.id === this.props.current_user.current_user.id){
      editProfileButton = <Link class="btn btn-primary" to={`/users/${this.props.current_user.current_user.id}/edit`}>
        Edit Profile
      </Link>

      projectHeader = <h1 class="text-white mt-3"> Here are all of your projects: </h1>

      displayUserProjects = userProjects.map( (project,index) =>
            <div class="col-sm-4" key={index}>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{project.project_name}</h5>
                  <p class="card-text">{project.description}</p>
                  <Link to={`/projects/${project.id}`} class="btn btn-primary"> Work on this Project </Link>
                  <button class="btn btn-danger" onClick={this.handleOnClick} data-project={project.id}> Delete </button>
                </div> {/**end card-body **/}
              </div> {/**end card **/} <br></br>
            </div>)//end col

      createProject = < ProjectInput addProject={this.props.addProject} current_user={this.props.current_user} projects={this.props.projects}/>
    }// end if




    return (
      <div class="container-fluid">
        <NavBarUsers />
        <div class="row">
          <div class="col">
            <div class="card w-50">
              <div class="card-body">
                <h4 class="card-title">User Info</h4>
                <p class="card-text">User Name: {user.user_name}</p>
                <p class="card-text">Email: {user.email}</p>
                  {editProfileButton}
              </div> {/** end card body **/}
            </div>{/** end card **/}
          </div> {/** end col **/}

          <div class="col">
            {createProject}
          </div> {/** end col **/}
        </div>{/** end row **/}

        <div class="row mt-2">
          {projectHeader}
        </div> {/** end row **/}

        <div class="row mt-2">
          {displayUserProjects}
        </div> {/** end row **/}

      </div>// end container
    )//end return
  }// end render
}// end class definition

export default User
/**

<button onClick={this.handleOnClick}> x </button>


**/
