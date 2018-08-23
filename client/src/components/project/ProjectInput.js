import React, { Component } from 'react';

class ProjectInput extends Component {

  state = {
    project_name: ''
  }

  handleOnChange(event) {
    this.setState({
      project_name: event.target.value,
    });
  }




  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addProject(this.state);
    this.setState({
      project_name: '',
    });
  }



  render() {
    return (
      <div>
        <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <label>Enter Project Name</label><br></br>
            <input
              type="text"
              value={this.state.project_name}
              onChange={(event) => this.handleOnChange(event)} />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
};

export default ProjectInput;
