export default function commentsReducer(state = {loading: false, comments: []}, action) {
  switch (action.type) {
    case "LOADING_COMMENTS":

      return Object.assign({},state, {loading:true})

    case "FETCH_COMMENTS":
      return {loading: false, comments: action.payload}

    case "ADD_COMMENT":
      let comment = action.payload
      return {
        ...state,
        comments: [ ...state.comments, comment]
      }

      case 'DELETE_COMMENT':
        let id = parseInt(action.payload.comment_id,10)
        const comments = state.comments.filter(comment => comment.id !== id);
        return { ...state, comments}

      default:
        return state;


  }
}
