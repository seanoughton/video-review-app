

export function fetchProjects() {
 return (dispatch) => {
   dispatch({ type: 'LOADING_PROJECTS' });
   return fetch('/projects')
     .then(response => response.json() )
     .then(response => dispatch({ type: 'FETCH_PROJECTS', payload: response }));
 };// end return

}//end fetchProjects **/
