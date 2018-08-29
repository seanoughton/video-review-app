export default function loginReducer(state = {current_user:false}, action) {
  switch (action.type) {


    case "SET_CURRENT_USER":
    let user = action.payload
    let login
    if (user === false) {
      login = false
    } else {
      login = true
    }
      return {
        ...state,
        current_user:  user,
        login: login
      }

    case 'DELETE_CURRENT_USER':
      return {
        ...state,
        current_user:  false
      }

      case 'UPDATE_CURRENT_USER':
        let project = action.payload.payload
        user = state.current_user
        user.projects.push(project)

        return {
          ...state,
          current_user:  user
        }

        case "UPDATE_USER_INFO":
          let updatedUser = action.payload.payload
          return {
            ...state,
            current_user:  updatedUser
          }




    default:
      return state;
  }
}
