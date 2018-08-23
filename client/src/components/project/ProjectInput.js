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

const mapStateToProps = (state) => {
  return { projects: state.projects}
}


const mapDispatchToProps = dispatch => ({
  addProject: project_state => dispatch(addProject(project_state))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectInput)
