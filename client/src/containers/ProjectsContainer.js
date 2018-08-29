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


class ProjectsContainer extends Component {
  render() {

    let userProjects = []
    //test to see if this user has any projects and if assign them
    if (this.props.current_user.projects){
      userProjects = this.props.current_user.projects
    }


    let displayProjects = userProjects.map( (project,index) =>
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
        <h1 class="text-white"> Here are all of your projects: </h1><br></br>
          <div class="row ml-4">
            < ProjectInput addProject={this.props.addProject} current_user={this.props.current_user} projects={this.props.projects}/>
          </div>
          <div class="row">
              {displayProjects}
          </div>
      </div>

    )
  }// end render
}// end class definition

const mapStateToProps = (state) => {
  return { current_user: state.current_user.current_user}
}

const mapDispatchToProps = dispatch => ({
  addProject: project_state => dispatch(addProject(project_state))
})


export default connect(mapStateToProps,mapDispatchToProps)(ProjectsContainer)
