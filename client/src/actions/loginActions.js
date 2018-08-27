
export function login(user_state) {
 return (dispatch) => {
   var url = '/login';
   //var url = '/users';
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
