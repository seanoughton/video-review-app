export default function projectsReducer(state = {loading: false, projects: []}, action) {
  switch (action.type) {
    case "LOADING_PROJECTS":

      return Object.assign({},state, {loading:true})

    case "FETCH_PROJECTS":
      return {loading: false, projects: action.payload}

    case "ADD_PROJECT":
      var url = '/projects';
      //var data = {project_name: 'new_project', team_id: 1};
      var data = {project_name: 'new_project'};


      fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .then(response => console.log('Success:', response))
        .catch(error => console.error('Error:', error));

      return state



    default:
      return state;
  }
}
