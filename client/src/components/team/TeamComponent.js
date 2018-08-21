import React, { Component } from 'react';

class Team extends Component {


  render() {
    const { team } = this.props;

    return (
      <div>

          {team.id}
          {team.team_name}

      </div>
    );
  }
};

export default Team;
