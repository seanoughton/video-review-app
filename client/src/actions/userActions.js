export function fetchUsers() {
 return (dispatch) => {
   dispatch({ type: 'LOADING_USERS' });
   return fetch('/users')
     .then(response => response.json() )
     .then(response => dispatch({ type: 'FETCH_USERS', payload: response }));
 };// end return

}//end fetchUsers **/
