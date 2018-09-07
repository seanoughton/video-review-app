// import React stuff
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProjectInput from '../../components/project/ProjectInput'
import NavBarUsers from '../../components/navbar/NavBarUsers';
import ProjectInfo from '../../components/project/ProjectInfo'

class UserShow extends Component {

  constructor(props) {
       super(props)
       this.state = {
         counter: 0
       }

     }// end constructor

  handleOnClick = (event) => {
    event.preventDefault();
    if (window.confirm('Are you sure you wish to delete this item?')){
      this.props.deleteProject(event.target.dataset.id)
    }
  }// end handleOnClick

  handleOnLikeClick = (event) => {
    event.preventDefault();
    this.setState({
      counter: this.state.counter + 1
    })
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
    let newUserProjects = []



    // test to see if the async request for fetching all of the users has been made by testing to see if there are any users in the store
    if (allUsers.length > 0) {
      user = allUsers.find(user =>  user.id === userId)
    }

// sort through the projects for this users projects
    this.props.projects.projects.forEach( function (project){
      project.users.forEach( function (user){
        if (user.id === userId){
          newUserProjects.push(project)
        }
      })
    })




    if (user.id === this.props.current_user.current_user.id){
      editProfileButton = <Link className="btn btn-primary" to={`/users/${this.props.current_user.current_user.id}/edit`}>
        Edit Profile
      </Link>

      projectHeader = <h1 className="text-white mt-3"> Here are all of your projects: </h1>


        displayUserProjects = newUserProjects.map( (project) =>
          <ProjectInfo project={project} key={project.id}/> )

      createProject = < ProjectInput addProject={this.props.addProject} current_user={this.props.current_user} projects={this.props.projects}/>
    }// end if


    return (
      <div className="container-fluid">
        <NavBarUsers />
        <div className="row">
          <div className="col">
            <div className="card w-50">
              <div className="card-body">
                <h4 className="card-title">User Info</h4>
                <p className="card-text">User Name: {user.user_name}</p>
                <p className="card-text">Email: {user.email}</p>
                  {editProfileButton}
              </div> {/** end card body **/}
            </div>{/** end card **/}
          </div> {/** end col **/}

          <div className="col">
            {createProject}
          </div> {/** end col **/}
        </div>{/** end row **/}

        <div className="row mt-2">
          {projectHeader}
        </div> {/** end row **/}

        <div className="row mt-2">
          {displayUserProjects}
        </div> {/** end row **/}

      </div>// end container
    )//end return
  }// end render
}// end class definition

export default UserShow
