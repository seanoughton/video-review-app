import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { editProject } from  '../../actions/projectActions';


class ProjectsList extends Component {

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
      likes: 100
    })
    ///this.state.counter = this.state.counter + 1
    this.props.editProject(this.state);
  }// end handleOnClick

  render() {
    return (

      <div className="col-sm-4" key={this.props.project.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.project.project_name}</h5>
            <h5 className="card-title">Likes State: {this.state.likes}</h5>
            <h5 className="card-title">Likes Props: {this.props.project.likes}</h5>
            <p className="card-text">{this.props.project.description}</p>
            <Link to={`/projects/${this.props.project.id}`} className="btn btn-primary"> Work on this Project </Link>
            <button className="btn btn-danger"  onClick={this.props.handleOnClick} data-id={this.props.project.id}> Delete Project </button>
            <button className="btn btn-success"  name="like" onClick={this.handleOnLikeClick} data-id={this.props.project.id}> Like </button>
          </div> {/**end card-body **/}
        </div> {/**end card **/} <br></br>
      </div>//end col

  )//end return
  }// end render
  }// end class


const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  editProject: state => dispatch(editProject(state))
})

export default connect(mapStateToProps,mapDispatchToProps)(ProjectsList)
