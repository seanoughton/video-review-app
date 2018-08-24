import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { deleteProject } from  '../actions/projectActions';

import Project from '../components/project/ProjectComponent'
import ProjectInput from '../components/project/ProjectInput'



class ProjectsContainer extends Component {





  render() {

    let allProjects = this.props.projects.projects


    let projects = allProjects.map( (project,index) => <li key={index}>
    <Link to={`/projects/${project.id}`}>
      {project.project_name}
    </Link>
    </li>)


    return (
      <div>
        
        <h1> All Projects </h1>
        <ul>
          {projects}
        </ul>
        < ProjectInput/>

      </div>
    )
  }
}





export default ProjectsContainer
