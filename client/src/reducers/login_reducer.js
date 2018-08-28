export default function loginReducer(state = {current_user:false}, action) {
  switch (action.type) {


    case "SET_CURRENT_USER":
      //console.log(action.payload)
    let user = action.payload
    return {
      ...state,
      current_user:  user
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




    default:
      return state;
  }
}
