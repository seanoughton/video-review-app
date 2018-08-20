import React, { Component } from 'react';

class Team extends Component {


  render() {
    const { team } = this.props;

    return (
      <div>

          {team.id}


      </div>
    );
  }
};

export default Team;
