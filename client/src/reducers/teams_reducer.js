export default function teamsReducer(state = {loading: false, teams: []}, action) {
  switch (action.type) {
    case "LOADING_TEAMS":

      return Object.assign({},state, {loading:true})

    case "FETCH_TEAMS":
      console.log(action.payload)
      return {loading: false, teams: action.payload}

    case "ADD_TEAM":
      let team = action.payload
      return {
        ...state,
        teams: [ ...state.teams, team]
      }

    case 'DELETE_TEAM':
      let id = parseInt(action.payload.team_id,10)
      const teams = state.teams.filter(team => team.id !== id);
      return { ...state, teams}

    default:
      return state;
  }
}
