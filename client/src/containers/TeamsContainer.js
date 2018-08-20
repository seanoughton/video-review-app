import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeams } from  '../actions/teamActions';

import Team from '../components/team/TeamComponent'

class TeamsContainer extends Component {

  componentDidMount() {
     this.props.fetchTeams()
   }

  render() {
    console.log(this.props.teams.teams)
    let allTeams= this.props.teams.teams

    let teams = allTeams.map((team,index) => <li> < Team key={index}   team={team}/> </li>)


    return (
      <div>
        <h1> All Teams </h1>
        <ul>
          {teams}
        </ul>

      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { teams: state.teams}
}


const mapDispatchToProps = dispatch => ({
  fetchTeams: () => dispatch(fetchTeams())
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamsContainer)
