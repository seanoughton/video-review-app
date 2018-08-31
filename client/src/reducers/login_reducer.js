export default function loginReducer(state = {current_user:false}, action) {
  switch (action.type) {


    case "SET_CURRENT_USER":
    let user = action.payload.payload
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

      case 'CURRENT_USER_ADD_PROJECT':
        let project = action.payload.payload
        user = state.current_user
        user.projects.push(project)

        return {
          ...state,
          current_user:  user
        }

        case 'CURRENT_USER_DELETE_PROJECT':
          let deletedProject = action.payload.payload

          user = state.current_user
          let updatedProjects = user.projects.filter( project => project.id !== parseInt(deletedProject.project_id,10) )
          user.projects = updatedProjects
          return {
            ...state,
            current_user:  user
          }

        case "UPDATE_USER_INFO":
          user = action.payload.payload
          return {
            ...state,
            current_user:  user
          }




    default:
      return state;
  }
}
