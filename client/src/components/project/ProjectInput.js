import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';

import { addProject } from  '../../actions/projectActions';

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

          <div class="form-group" >
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
              <label for="user_name">Enter Project Name</label>
              <input
                type="text"
                class="form-control"
                id="project_name"
                aria-describedby="userHelp"
                placeholder="Enter Project Name"
                value={this.state.project_name}
                onChange={(event) => this.handleOnChange(event)}
                />
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { projects: state.projects}
}


const mapDispatchToProps = dispatch => ({
  addProject: project_state => dispatch(addProject(project_state))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectInput)
