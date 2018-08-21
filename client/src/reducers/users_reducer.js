export default function usersReducer(state = {loading: false, users: []}, action) {
  switch (action.type) {
    case "LOADING_USERS":

      return Object.assign({},state, {loading:true})

    case "FETCH_USERS":
      return {loading: false, users: action.payload}

    case "ADD_USER":
      let user = action.payload
      return {
        ...state,
        users: [ ...state.users, user]
      }

    default:
      return state;
  }
}
