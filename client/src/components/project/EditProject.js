//import react stuff
import React, { Component } from 'react';

class EditProject extends Component {

  constructor(props) {
       super(props)
       this.state = {
         id: this.props.projectId,
         project_name: '',
         description: '',
         user_ids: [parseInt(this.props.current_user.id,10)]
       }
     }// end constructor

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }// end handleOnChange

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.editProject(this.state);
    this.setState({
      project_name: '',
      description: ''
    })
  }// end handleOnSubmit


  render() {
    return (
      <div class="form-group mt-4" >
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <h3 class="text-white">Edit Project</h3>
          <input
            type="text"
            class="form-control"
            id="project_name"
            name="project_name"
            aria-describedby="userHelp"
            placeholder="Enter Project Name"
            value={this.state.project_name}
            onChange={(event) => this.handleOnChange(event)}
            />

            <input
              type="text"
              class="form-control mt-3"
              id="description"
              name="description"
              aria-describedby="descriptionHelp"
              placeholder="Describe the Project"
              value={this.state.description}
              onChange={(event) => this.handleOnChange(event)}
              />
          <button type="submit" class="btn btn-primary mt-4">Submit</button>
        </form>
      </div>
    )// end return
  }// end render
}// end class definition


export default EditProject
