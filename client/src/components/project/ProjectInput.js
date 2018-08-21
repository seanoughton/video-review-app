import React, { Component } from 'react';

class ProjectInput extends Component {

  state = {
    project_name: '',
    team_id: 1
  }

  handleOnChange(event) {
    this.setState({
      project_name: event.target.value,
    });
  }


/**
this code lives in RestaurantsContainer
when addRestaurant() is called, it needs an argument of 'name'
addRestaurant(name)
below it is called as a prop on this container
this.props.addRestaurant(this.state.text)
this.state.text is the name argument that gets passed into addRestaurant and gets sent to the reducer inside the dispatch function
const mapDispatchToProps = dispatch => ({
  addRestaurant: name => dispatch({ type: "ADD_RESTAURANT", name }),
  deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id })

})


**/
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addProject(this.state.project_name);
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
              value={this.state.text}
              onChange={(event) => this.handleOnChange(event)} />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
};

export default ProjectInput;
