import React, { Component } from 'react';

class ProjectInput extends Component {

  constructor(props) {
       super(props)
       this.state = {
         project_name: '',
         description: '',
         user_ids: [parseInt(this.props.current_user.id,10)]
       }
     }// end constructor

  handleOnChange(event) {
    if (event.target.id === 'project_name'){
      this.setState({
        project_name: event.target.value,
      })
    }

    if (event.target.id === 'description'){
      this.setState({
        description: event.target.value,
      })
    }
  }// end handleOnChange

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addProject(this.state);
    this.setState({
      project_name: '',
      description: ''
    })
  }// end handleOnSubmit


  render() {
    return (
      <div class="form-group mt-4" >
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <h3 class="text-white">Create a New Project</h3>
          <input
            type="text"
            class="form-control"
            id="project_name"
            aria-describedby="userHelp"
            placeholder="Enter Project Name"
            value={this.state.project_name}
            onChange={(event) => this.handleOnChange(event)}
            />

            <input
              type="text"
              class="form-control mt-3"
              id="description"
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


export default ProjectInput
