export default function projectsReducer(state = {loading: false, projects: []}, action) {
  switch (action.type) {

    case "LOADING_PROJECTS":

      return Object.assign({},state, {loading:true})

    case "FETCH_PROJECTS":
      return {loading: false, projects: action.payload}

    case "ADD_PROJECT":
      let project = action.payload
      return {
        ...state,
        projects: [ ...state.projects, project]
      }


    case 'DELETE_PROJECT':
      let id = parseInt(action.payload.project_id,10)
      const projects = state.projects.filter(project => project.id !== id);
      return { ...state, projects}



    default:
      return state;

  }
}
