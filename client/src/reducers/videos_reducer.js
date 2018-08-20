export default function videosReducer(state = {loading: false, videos: []}, action) {

  switch (action.type) {

    case "LOADING_Videos":
      return Object.assign({},state, {loading:true})

    case "FETCH_VIDEOS":
      return {loading: false, videos: action.payload}

    default:
      return state;
  }
}
