export default function commentsReducer(state = {loading: false, comments: []}, action) {
  switch (action.type) {
    case "LOADING_COMMENTS":

      return Object.assign({},state, {loading:true})

    case "FETCH_COMMENTS":
      return {loading: false, comments: action.payload}

    default:
      return state;
  }
}
