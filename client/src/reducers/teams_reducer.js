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

    default:
      return state;
  }
}
