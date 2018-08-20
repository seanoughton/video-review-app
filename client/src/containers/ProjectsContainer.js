import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProjects } from  '../actions/projectActions';

import Project from '../components/project/ProjectComponent'

class ProjectsContainer extends Component {

  componentDidMount() {
     this.props.fetchProjects()
   }

  render() {
    console.log(this.props.projects.projects)
    let allProjects = this.props.projects.projects

    let projects = allProjects.map( (project,index) => <li> < Project key={index}   project={project}/> </li>)


    return (
      <div>
        <h1> All Projects </h1>
        <ul>
          {projects}
        </ul>

      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { projects: state.projects}
}


const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)
