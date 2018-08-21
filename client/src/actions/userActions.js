export function fetchUsers() {
 return (dispatch) => {
   dispatch({ type: 'LOADING_USERS' });
   return fetch('/users')
     .then(response => response.json() )
     .then(response => dispatch({ type: 'FETCH_USERS', payload: response }));
 };// end return

}//end fetchUsers **/

export function addUser(user_state) {
 return (dispatch) => {
   var url = '/users';
   var data = {user:user_state };
   return fetch(url, {
     method: 'POST',
     body: JSON.stringify(data),
     headers:{
       'Content-Type': 'application/json'
       },
     }).then(res => res.json())
       .then(response => dispatch({ type: 'ADD_USER', payload: response }));
       //.then(response => console.log('Success:', response))
       //.catch(error => console.error('Error:', error));
 };// end return

}//end addUser **/
