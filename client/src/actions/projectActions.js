

export function fetchProjects() {
 return (dispatch) => {
   dispatch({ type: 'LOADING_PROJECTS' });
   return fetch('/projects')
     .then(response => response.json() )
     .then(response => dispatch({ type: 'FETCH_PROJECTS', payload: response }));
 };// end return

}//end fetchProjects **/

export function addProject(project_state) {
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
       .then(response => dispatch({ type: 'ADD_PROJECT', payload: response }));
       //.then(response => console.log('Success:', response))
       //.catch(error => console.error('Error:', error));
 };// end return

}//end addProject **/

export function deleteProject(project_id) {
 return (dispatch) => {
   var url = `/projects/${project_id}`;

   return fetch(url, {
     method: 'DELETE',
     headers:{
       'Content-Type': 'application/json'
       },
     }).then(res => res.json())
       .then(response => dispatch({ type: 'DELETE_PROJECT', payload: response }));
 };// end return

}//end deleteProject **/
