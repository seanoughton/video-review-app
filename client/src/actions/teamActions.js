export function fetchTeams() {
 return (dispatch) => {
   dispatch({ type: 'LOADING_TEAMS' });
   return fetch('/teams')
     .then(response => response.json() )
     .then(response => dispatch({ type: 'FETCH_TEAMS', payload: response }));
 };// end return

}//end fetchTeams **/

export function addTeam(team_state) {
 return (dispatch) => {
   var url = '/teams';
   var data = {team: team_state };

   return fetch(url, {
     method: 'POST',
     body: JSON.stringify(data),
     headers:{
       'Content-Type': 'application/json'
       },
     }).then(res => res.json())
       .then(response => dispatch({ type: 'ADD_TEAM', payload: response }));
       //.then(response => console.log('Success:', response))
       //.catch(error => console.error('Error:', error));
 };// end return

}//end addTeam **/
