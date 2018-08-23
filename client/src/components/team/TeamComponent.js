import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTeam } from  '../../actions/teamActions';

class Team extends Component {

  handleOnClick = () => {
    //this.props.deleteTeam (this.props.team.id)
    this.props.deleteTeam(this.props.match.params.id,10)
    //find a way to reroute this to the projects index page
  }

  render() {
    let allTeams = this.props.teams.teams
    let teamId = parseInt(this.props.match.params.id,10)
    let team = allTeams.find(team =>  team.id === teamId)

    return (
      <div>

          {team.team_name}
          <button onClick={this.handleOnClick}> x </button>

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { teams: state.teams}
}

const mapDispatchToProps = dispatch => ({
  deleteTeam: team_id => dispatch(deleteTeam(team_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Team)
