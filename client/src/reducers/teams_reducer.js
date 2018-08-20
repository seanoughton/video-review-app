export default function teamsReducer(state = {loading: false, teams: []}, action) {
  switch (action.type) {
    case "LOADING_TEAMS":

      return Object.assign({},state, {loading:true})

    case "FETCH_TEAMS":
      return {loading: false, teams: action.payload}

    default:
      return state;
  }
}
