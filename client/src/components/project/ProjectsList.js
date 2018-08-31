import React from 'react'
import { Link } from 'react-router-dom';


const ProjectsList = ({ project,handleOnClick }) =>

<div class="col-sm-4" key={project.id}>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{project.project_name}</h5>
      <p class="card-text">{project.description}</p>
      <Link to={`/projects/${project.id}`} class="btn btn-primary"> Work on this Project </Link>
      <button class="btn btn-danger"  onClick={handleOnClick} data-id={project.id}> Delete Project </button>
    </div> {/**end card-body **/}
  </div> {/**end card **/} <br></br>
</div>//end col


export default ProjectsList
