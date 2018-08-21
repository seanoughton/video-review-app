import React, { Component } from 'react';

class Team extends Component {

  handleOnClick = () => {
    this.props.deleteTeam (this.props.team.id)
  }

  render() {
    const { team } = this.props;

    return (
      <div>

          {team.team_name}
          <button onClick={this.handleOnClick}> x </button>

      </div>
    );
  }
};

export default Team;
