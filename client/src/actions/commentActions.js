

export function fetchComments() {
 return (dispatch) => {
   dispatch({ type: 'LOADING_COMMENTS' });
   return fetch('/comments')
     .then(response => response.json() )
     .then(response => dispatch({ type: 'FETCH_COMMENTS', payload: response }));
 };// end return

}//end fetchComments **/
