//sets a default value for comments
export default function commentsReducer(state = {loading: false, comments: []}, action) {
  switch (action.type) {
    //fired while the comments are loading from the fetch request
    case "LOADING_COMMENTS":

      return Object.assign({},state, {loading:true})
      //returns the current state with loading:true merged in
    case "FETCH_COMMENTS":
      return {loading: false, comments: action.payload}
      // adds all of the comments to the state
    case "ADD_COMMENT":
      let comment = action.payload
      //adds a single comment to the state
      return {
        ...state,
        comments: [ ...state.comments, comment]
      }

      case 'DELETE_COMMENT':
        let id = parseInt(action.payload.comment_id,10)
        //gets all of the comments except for the one that is being deleted and returns that to the state
        const comments = state.comments.filter(comment => comment.id !== id);
        return { ...state, comments}

      default:
        return state;


  }
}
