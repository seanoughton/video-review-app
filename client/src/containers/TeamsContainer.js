import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { fetchTeams } from  '../actions/teamActions';
import { addTeam } from  '../actions/teamActions';
import { deleteTeam } from  '../actions/teamActions';

import Team from '../components/team/TeamComponent'
import TeamInput from '../components/team/TeamInput'

class TeamsContainer extends Component {

  componentDidMount() {
     this.props.fetchTeams()
   }

  render() {
    let allTeams= this.props.teams.teams
    let teams = allTeams.map((team,index) => <li key={index}>
      <Link to={`/teams/${team.id}`}>
        {team.team_name}
      </Link>
      </li>)


    return (
      <div>
        <h1> All Teams </h1>
        <ul>
          {teams}
        </ul>
        < TeamInput addTeam={this.props.addTeam}/>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { teams: state.teams}
}


const mapDispatchToProps = dispatch => ({
  fetchTeams: () => dispatch(fetchTeams()),
  addTeam: team_state => dispatch(addTeam(team_state)),
  deleteTeam: team_id => dispatch(deleteTeam(team_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamsContainer)
