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

/**
    case "ADD_PROJECT":
      var url = '/projects';
      var data = {project:{project_name: action.project_name, team_id: 1}};
      let project = {}


      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
          },
        }).then(res => res.json())
          .then(response => console.log(response))
          .then(response => project = response)
          //.then(response => console.log('Success:', response))
          .catch(error => console.error('Error:', error));

          return {
            ...state,
            projects: [ ...state.projects, project]
          }
**/


    default:
      return state;
  }
}
