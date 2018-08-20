

export function fetchVideos() {
 return (dispatch) => {
   dispatch({ type: 'LOADING_VIDEOS' });
   return fetch('/videos')
     .then(response => response.json() )
     .then(response => dispatch({ type: 'FETCH_VIDEOS', payload: response }));
 };// end return

}//end fetchVideos **/
