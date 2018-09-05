//sets a default value for users
export default function usersReducer(state = {loading: false, users: []}, action) {
  switch (action.type) {
    //fired while the users are loading from the fetch request
    case "LOADING_USERS":
      //returns the current state with loading:true merged in
      return Object.assign({},state, {loading:true})

    case "FETCH_USERS":
    // adds all of the users to the state
      return {loading: false, users: action.payload}

    case "ADD_USER":
      let user = action.payload
      //adds a single user to the state
      return {
        ...state,
        users: [ ...state.users, user]
      }

    case "UPDATE_USER":
      let updatedUser = action.payload
      // gets all of the users except for the one being updated
      let users = state.users.filter( user => user.id !== updatedUser.id)
      //pushes the updated user into users
      users.push(updatedUser)
      return { ...state, users}

    case 'DELETE_USER':
      let id = parseInt(action.payload.user_id,10)
      //gets all of the users except for the one that is being deleted and returns that to the state
      users = state.users.filter(user => user.id !== id);
      return { ...state, users}






    default:
      return state;
  }
}
