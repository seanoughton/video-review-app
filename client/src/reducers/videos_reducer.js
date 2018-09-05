//sets a default value for videos
export default function videosReducer(state = {loading: false, videos: []}, action) {
  switch (action.type) {
      //fired while the videosReducer are loading from the fetch request
    case "LOADING_VIDEOS":
    //returns the current state with loading:true merged in
      return Object.assign({},state, {loading:true})

    case "FETCH_VIDEOS":
    // adds all of the videos to the state
      return {loading: false, videos: action.payload}

    case "ADD_VIDEO":
      let video = action.payload
      //adds a single video to the state
      return {
        ...state,
        videos: [ ...state.videos, video]
      }

      case "UPDATE_VIDEO":
        video = action.payload
        // gets all of the videos except for the one being updated
        let updatedVideos = state.videos.filter( stateVideo => stateVideo.id !== video.id)
        //pushes the updated video into videos
        updatedVideos.push(video)
        return {
          ...state,
          videos: updatedVideos
        }

    case 'DELETE_VIDEO':
      let id = parseInt(action.payload.video_id,10)
      //gets all of the videos except for the one that is being deleted and returns that to the state
      const videos = state.videos.filter(video => video.id !== id);
      return { ...state, videos}

    default:
      return state;
  }
}
