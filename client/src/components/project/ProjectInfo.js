import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { editProject } from  '../../actions/projectActions';
import { deleteProject } from  '../../actions/projectActions';


class ProjectInfo extends Component {

  constructor(props) {
       super(props)
       this.state = {
         id: this.props.project.id,
         likes: this.props.project.likes,
         project_name: this.props.project.project_name,
         description: this.props.project.description
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
      likes: ++this.state.likes,
      id: event.target.dataset.id
    })
    this.props.editProject(this.state);
  }// end handleOnClick

  render() {
    return (

      <div className="col-sm-4" >
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.project.project_name}</h5>
            <h5 className="card-title">Likes: {this.props.project.likes}</h5>
            <p className="card-text">{this.props.project.description}</p>
            <Link to={`/projects/${this.props.project.id}`} className="btn btn-primary"> Work on this Project </Link>
            <button className="btn btn-danger"  onClick={this.handleOnClick} data-id={this.props.project.id}> Delete Project </button>
            <button className="btn btn-success"  name="like" onClick={this.handleOnLikeClick} data-id={this.props.project.id}> Like </button>
          </div> {/**end card-body **/}
        </div> {/**end card **/} <br></br>
      </div>//end col

    )//end return
  }// end render
}// end class


const mapStateToProps = (state) => {
  return { projects: state.projects }
}

const mapDispatchToProps = dispatch => ({
  editProject: project_state => dispatch(editProject(project_state)),
  deleteProject: project_state => dispatch(deleteProject(project_state))
})

export default connect(mapStateToProps,mapDispatchToProps)(ProjectInfo)
