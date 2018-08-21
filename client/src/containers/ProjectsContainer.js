import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProjects } from  '../actions/projectActions';
import { addProject } from  '../actions/projectActions';

import Project from '../components/project/ProjectComponent'
import ProjectInput from '../components/project/ProjectInput'

class ProjectsContainer extends Component {

  componentDidMount() {
     this.props.fetchProjects()
   }

  render() {
    let allProjects = this.props.projects.projects

    let projects = allProjects.map( (project,index) => <li key={index}> < Project    project={project}/> </li>)


    return (
      <div>
        <h1> All Projects </h1>
        <ul>
          {projects}
        </ul>
        < ProjectInput addProject={this.props.addProject}/>

      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { projects: state.projects}
}


const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  addProject: project_state => dispatch(addProject(project_state))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)
