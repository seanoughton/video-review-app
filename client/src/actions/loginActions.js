//checks to see if the user is in the database and if the username and password are correct. If so it returns that user and the user is added as the current user in the redux store.
export function login(user_state) {
 return (dispatch) => {
   var url = '/login';
   var data = {user:user_state };
   return fetch(url, {
     method: 'POST',
     body: JSON.stringify(data),
     headers:{
       'Content-Type': 'application/json'
       },
     }).then(res => res.json())
       .then(response => dispatch({ type: 'SET_CURRENT_USER_LOGIN', payload: response }));
 };// end return

}//end login **/

//dispatch to delete the current_user from the redux store
export function deleteCurrentUser(user_id) {
 return (dispatch) => {

   dispatch({ type: 'DELETE_CURRENT_USER', payload: true })

 };// end return

}//end deleteCurrentUser **/
