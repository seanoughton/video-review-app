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

    default:
      return state;
  }
}
