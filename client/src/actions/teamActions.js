export function fetchTeams() {
 return (dispatch) => {
   dispatch({ type: 'LOADING_TEAMS' });
   return fetch('/teams')
     .then(response => response.json() )
     .then(response => dispatch({ type: 'FETCH_TEAMS', payload: response }));
 };// end return

}//end fetchTeams **/
