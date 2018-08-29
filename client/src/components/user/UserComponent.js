// import React stuff
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProjectInput from '../../components/project/ProjectInput'

class User extends Component {
  render() {

    let user = {user_name:'', email:'', password:'', id:''}
    let allUsers = this.props.users.users
    let userId = parseInt(this.props.match.params.id,10)
    let editProfileButton

    // test to see if the async request for fetching all of the users has been made by testing to see if there are any users in the store
    if (allUsers.length > 0) {
      user = allUsers.find(user =>  user.id === userId)
    }

    if (user.id === this.props.current_user.current_user.id){
      editProfileButton = <Link class="btn btn-primary" to={`/users/${this.props.current_user.current_user.id}/edit`}>
        Edit Profile
      </Link>
    }

    let userProjects = []
    //test to see if this user has any projects and if assign them
    if (this.props.current_user.current_user.projects){
      userProjects = this.props.current_user.current_user.projects
    }

    let displayUserProjects = userProjects.map( (project,index) =>
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
            < ProjectInput addProject={this.props.addProject} current_user={this.props.current_user} projects={this.props.projects}/>
          </div> {/** end col **/}
        </div>{/** end row **/}

        <h1 class="text-white mt-3"> Here are all of your projects: </h1><br></br>
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
