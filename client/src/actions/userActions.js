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
       //.then(response => dispatch({ type: 'ADD_USER', payload: response }))
       .then(response => dispatch(
         { type: 'ADD_USER', type: 'SET_CURRENT_USER', payload: response }
       )
     )
       //.then(response => dispatch({ type: 'SET_CURRENT_USER', payload: response }))
       //.catch(error => console.error('Error:', error));
 };// end return

}//end addUser **/

export function editUser(user_state) {
 return (dispatch) => {
   var url = `/users/${user_state.id}`;
   //var url = `/users/${user_state.id}`;
   var data = {user:user_state };
   return fetch(url, {
     method: 'PATCH',
     body: JSON.stringify(data),
     headers:{
       'Content-Type': 'application/json'
       },
     }).then(res => res.json())
       .then(response => dispatch({ type: 'UPDATE_USER', payload: response }))
       .then(response => dispatch({ type: 'UPDATE_USER_INFO', payload: response }))
 };// end return

}//end editUser **/

export function deleteUser(user_id) {
 return (dispatch) => {
   var url = `/users/${user_id}`;

   return fetch(url, {
     method: 'DELETE',
     headers:{
       'Content-Type': 'application/json'
       },
     }).then(res => res.json())
       .then(response => dispatch({ type: 'DELETE_USER', payload: response }));
 };// end return

}//end deleteUser **/
