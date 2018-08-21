

export function fetchComments() {
 return (dispatch) => {
   dispatch({ type: 'LOADING_COMMENTS' });
   return fetch('/comments')
     .then(response => response.json() )
     .then(response => dispatch({ type: 'FETCH_COMMENTS', payload: response }));
 };// end return

}//end fetchComments **/

export function addComment(comment_state) {
 return (dispatch) => {
   var url = '/comments';
   var data = {comment:comment_state};

   return fetch(url, {
     method: 'POST',
     body: JSON.stringify(data),
     headers:{
       'Content-Type': 'application/json'
       },
     }).then(res => res.json())
       .then(response => dispatch({ type: 'ADD_COMMENT', payload: response }));
       //.then(response => console.log('Success:', response))
       //.catch(error => console.error('Error:', error));
 };// end return

}//end addComment **/


export function deleteComment(comment_id) {
 return (dispatch) => {
   var url = `/comments/${comment_id}`;

   return fetch(url, {
     method: 'DELETE',
     headers:{
       'Content-Type': 'application/json'
       },
     }).then(res => res.json())
       .then(response => dispatch({ type: 'DELETE_COMMENT', payload: response }));
 };// end return

}//end deleteComment **/
