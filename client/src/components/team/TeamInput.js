import React, { Component } from 'react';

class TeamInput extends Component {

  state = {
    team_name: ''
  }

  handleOnChange(event) {
    this.setState({
      team_name: event.target.value,
    });
  }




  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addTeam(this.state);
    this.setState({
      team_name: '',
    });
  }



  render() {
    return (
      <div>
        <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <label>Enter Team Name</label><br></br>
            <input
              type="text"
              value={this.state.team_name}
              onChange={(event) => this.handleOnChange(event)} />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
};

export default TeamInput;
