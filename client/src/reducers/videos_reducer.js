export default function videosReducer(state = {loading: false, videos: []}, action) {
  switch (action.type) {
    case "LOADING_VIDEOS":

      return Object.assign({},state, {loading:true})

    case "FETCH_VIDEOS":
      return {loading: false, videos: action.payload}

    case "ADD_VIDEO":
      let video = action.payload
      return {
        ...state,
        videos: [ ...state.videos, video]
      }

    case 'DELETE_VIDEO':
      let id = parseInt(action.payload.video_id,10)
      const videos = state.videos.filter(video => video.id !== id);
      return { ...state, videos}

    default:
      return state;
  }
}
