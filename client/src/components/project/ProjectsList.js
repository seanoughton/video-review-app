import React from 'react'
import { Link } from 'react-router-dom';


const ProjectsList = ({ project,handleOnClick }) =>

<div className="col-sm-4" key={project.id}>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{project.project_name}</h5>
      <p className="card-text">{project.description}</p>
      <Link to={`/projects/${project.id}`} className="btn btn-primary"> Work on this Project </Link>
      <button className="btn btn-danger"  onClick={handleOnClick} data-id={project.id}> Delete Project </button>
    </div> {/**end card-body **/}
  </div> {/**end card **/} <br></br>
</div>//end col


export default ProjectsList
