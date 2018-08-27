
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
       .then(response => dispatch({ type: 'SET_CURRENT_USER', payload: response }));
 };// end return

}//end login **/

export function deleteCurrentUser(user_id) {
 return (dispatch) => {

   dispatch({ type: 'DELETE_CURRENT_USER', payload: true })
   /**
   var url = `/users/${user_id}`;

   return fetch(url, {
     method: 'DELETE',
     headers:{
       'Content-Type': 'application/json'
       },
     }).then(res => res.json())
       .then(response => dispatch({ type: 'DELETE_USER', payload: response })); **/
 };// end return

}//end deleteCurrentUser **/
