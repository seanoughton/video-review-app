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

    case "UPDATE_USER":
      let updatedUser = action.payload
      let users = state.users.filter( user => user.id !== updatedUser.id)
      users.push(updatedUser)
      return { ...state, users}

    case 'DELETE_USER':
      let id = parseInt(action.payload.user_id,10)
      users = state.users.filter(user => user.id !== id);
      return { ...state, users}






    default:
      return state;
  }
}
