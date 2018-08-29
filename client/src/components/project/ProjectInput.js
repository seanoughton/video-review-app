import React, { Component } from 'react';

class ProjectInput extends Component {

  state = {
    project_name: '',
    description: '',
    user_ids: [parseInt(this.props.current_user.id,10)]
  }

  handleOnChange(event) {
    if (event.target.id === 'project_name'){
      this.setState({
        project_name: event.target.value,
      });
    }

    if (event.target.id === 'description'){
      this.setState({
        description: event.target.value,
      });
    }

  }



  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addProject(this.state);
    this.setState({
      project_name: '',
      description: ''
    });
  }



  render() {
    return (
      <div>
        <div>

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
        </div>
      </div>
    );
  }
};






export default ProjectInput
