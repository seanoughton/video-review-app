
// gets all of the projects from the Rails API
export function fetchProjects() {
 return (dispatch) => {
   dispatch({ type: 'LOADING_PROJECTS' });
   return fetch('/projects')
     .then(response => response.json() )
     .then(response => dispatch({ type: 'FETCH_PROJECTS', payload: response }));
 };// end return

}//end fetchProjects **/

// adds a project to the Rails API backend
export function addProject(project_state) {
  console.log(project_state)
 return (dispatch) => {
   var url = '/projects';
   var data = {project:project_state};
   return fetch(url, {
     method: 'POST',
     body: JSON.stringify(data),
     headers:{
       'Content-Type': 'application/json'
       },
     }).then(res => res.json())
       .then(response => dispatch({ type: 'ADD_PROJECT', payload: response }))
       .then(response => dispatch({ type: 'CURRENT_USER_ADD_PROJECT', payload: response }))
 };// end return
}//end addProject **/

// edits a comment to the Rails API backend
 export function editProject(project_state) {
  return (dispatch) => {
    var url = `/projects/${project_state.id}`;
    var data = {project:project_state};
    return fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
        },
      }).then(res => res.json())
        .then(response => dispatch({ type: 'UPDATE_PROJECT', payload: response }))
  };// end return
}//end editProject **/

// deletes a comment from the Rails API backend
export function deleteProject(project_id) {
 return (dispatch) => {
   var url = `/projects/${project_id}`;

   return fetch(url, {
     method: 'DELETE',
     headers:{
       'Content-Type': 'application/json'
       },
     }).then(res => res.json())
       .then(response => dispatch({ type: 'DELETE_PROJECT', payload: response }))
       .then(response => dispatch({ type: 'CURRENT_USER_DELETE_PROJECT', payload: response }))
 };// end return

}//end deleteProject **/
