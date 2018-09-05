
// gets all of the videos from the Rails API
export function fetchVideos() {
 return (dispatch) => {
   dispatch({ type: 'LOADING_VIDEOS' });
   return fetch('/videos')
     .then(response => response.json() )
     .then(response => dispatch({ type: 'FETCH_VIDEOS', payload: response }));
 };// end return

}//end fetchVideos **/


// adds a video to the Rails API backend
export function addVideo(video_state) {

 return (dispatch) => {
   var url = '/videos';
   var data = {video:video_state };
   return fetch(url, {
     method: 'POST',
     body: JSON.stringify(data),
     headers:{
       'Content-Type': 'application/json'
       },
     }).then(response => response.json())
       .then(response => dispatch({ type: 'ADD_VIDEO', payload: response }));
       //.then(response => console.log('Success:', response))
       //.catch(error => console.error('Error:', error));
 };// end return

}//end addVideo **/

// deletes a video from the Rails API backend
export function deleteVideo(video_id) {
 return (dispatch) => {
   var url = `/videos/${video_id}`;

   return fetch(url, {
     method: 'DELETE',
     headers:{
       'Content-Type': 'application/json'
       },
     }).then(response => response.json())
       .then(response => dispatch({ type: 'DELETE_VIDEO', payload: response }));
 };// end return

}//end deleteVideo **/

// updates a user to the Rails API backend
export function updateVideo(video_state) {
 return (dispatch) => {
   var url = `/videos/${video_state.id}`;
   var data = {video:video_state };
   return fetch(url, {
     method: 'PATCH',//change for update
     body: JSON.stringify(data),
     headers:{
       'Content-Type': 'application/json'
       },
     }).then(response => response.json())
       .then(response => dispatch({ type: 'UPDATE_VIDEO', payload: response }));

 };// end return


}//end updateVideo **/
