/// import React stuff
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

/// import actions
import { deleteProject } from  '../actions/projectActions';
import { addProject } from  '../actions/projectActions';
import { editProject } from  '../actions/projectActions';

/// import Components
import ProjectInput from '../components/project/ProjectInput'
import ProjectInfo from '../components/project/ProjectInfo'
import NavBarProjects from '../components/navbar/NavBarProjects';


class ProjectsContainer extends Component {

  handleOnClick = (event) => {
    event.preventDefault();
    if (window.confirm('Are you sure you wish to delete this item?')){
      this.props.deleteProject(event.target.dataset.id)
    }
  }// end handleOnClick


  handleSort =(event) => {
    this.props.sort()
  }

  render() {

    //set default values
    let projects = []
    let displayProjects = ''

    //test to see if this user has any projects and if assign them
    if (this.props.current_user.projects){
      projects = this.props.projects
    }

    displayProjects = projects.map( (project) =>
      < ProjectInfo key={project.id} project={project} /> )

    return (
      <div className="container-fluid">
        <NavBarProjects />
        <h1 className="text-white"> Here are all of the projects: </h1><br></br>
          <div className="row">
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
  addProject: project_state => dispatch(addProject(project_state)),
  deleteProject: project_state => dispatch(deleteProject(project_state)),
  editProject: project_state => dispatch(editProject(project_state)),
  sort: () => dispatch({type: 'SORT_PROJECTS'})
})


export default connect(mapStateToProps,mapDispatchToProps)(ProjectsContainer)

//<button onClick={this.handleSort}>Sort</button>
