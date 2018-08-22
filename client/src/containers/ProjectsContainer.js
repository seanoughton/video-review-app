import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';


import { fetchProjects } from  '../actions/projectActions';
import { addProject } from  '../actions/projectActions';
import { deleteProject } from  '../actions/projectActions';

import Project from '../components/project/ProjectComponent'
import ProjectInput from '../components/project/ProjectInput'


class ProjectsContainer extends Component {

  componentDidMount() {
     this.props.fetchProjects()
   }



  render() {
    let allProjects = this.props.projects.projects

    //let projects = allProjects.map( (project,index) => <li key={index}> < Project    project={project} deleteProject={this.props.deleteProject} /> </li>)

    let projects = allProjects.map( (project,index) => <li key={index}>
    <Link to={`/projects/${project.id}`}>
      < Project project={project} deleteProject={this.props.deleteProject} />
    </Link>

    </li>)


    return (
      <div>
        <h1> All Projects </h1>
        <ul>
          {projects}
        </ul>
        < ProjectInput addProject={this.props.addProject}/>

        <Route path={`${this.props.match.url}/:projectId`} render={routerProps => <Project {...routerProps}  /> }/>

      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { projects: state.projects}
}


const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  addProject: project_state => dispatch(addProject(project_state)),
  deleteProject: project_id => dispatch(deleteProject(project_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)
