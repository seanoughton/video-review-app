
export function fetchVideos() {
 return (dispatch) => {
   dispatch({ type: 'LOADING_CATS' });
   return fetch('/api/videos')
     .then(response => response.json() )
     .then(response => dispatch({ type: 'FETCH_CATS', payload: response.images }));
 };// end return

}//end fetchCats
