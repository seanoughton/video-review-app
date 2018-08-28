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



    case 'DELETE_USER':
      let id = parseInt(action.payload.user_id,10)
      const users = state.users.filter(user => user.id !== id);
      return { ...state, users}






    default:
      return state;
  }
}
