

export function fetchComments() {
 return (dispatch) => {
   dispatch({ type: 'LOADING_COMMENTS' });
   return fetch('/comments')
     .then(response => response.json() )
     .then(response => dispatch({ type: 'FETCH_COMMENTS', payload: response }));
 };// end return

}//end fetchComments **/

export function addComment(content) {
 return (dispatch) => {
   var url = '/comments';
   var data = {comment:{content: content, user_id: 1, video_id: 1, team_id: 1}};

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
