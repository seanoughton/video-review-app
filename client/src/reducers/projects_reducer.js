export default function projectsReducer(state = {loading: false, projects: []}, action) {
  switch (action.type) {
    case "LOADING_PROJECTS":

      return Object.assign({},state, {loading:true})

    case "FETCH_PROJECTS":
      return {loading: false, projects: action.payload}

    default:
      return state;
  }
}
