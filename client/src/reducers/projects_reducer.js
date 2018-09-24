//sets a default value for projects
export default function projectsReducer(state = {loading: false, projects: []}, action) {
  switch (action.type) {
    //fired while the projects are loading from the fetch request
    case "LOADING_PROJECTS":
    //returns the current state with loading:true merged in
      return Object.assign({},state, {loading:true})

    case "FETCH_PROJECTS":
    // adds all of the projects to the state
      return {loading: false, projects: action.payload}

    case "ADD_PROJECT":
      let project = action.payload
      //adds a single project to the state
      return {
        ...state,
        projects: [ ...state.projects, project]
      }

    case "UPDATE_PROJECT":
      let updatedProject = action.payload
      // gets all of the projects except for the one being updated
      let projects = state.projects.filter( project => project.id !== updatedProject.id)
      //pushes the updated project into projects
      projects.push(updatedProject)

      projects.sort(function(a, b) {
          if (a.id < b.id) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          return 0;
        }); 

      return { ...state, projects}


      case 'SORT_PROJECTS':
        projects = state.projects
        projects.sort(function(a,b){
          if(a.likes > b.like){
            return -1
          }
          if(a.likes < b.likes){
            return 1
          }
          return 0
        })
        return { ...state, projects}



    case 'DELETE_PROJECT':
      let id = parseInt(action.payload.project_id,10)
      //gets all of the projects except for the one that is being deleted and returns that to the state
      projects = state.projects.filter(project => project.id !== id);
      return { ...state, projects}



    default:
      return state;

  }
}
