export default function loginReducer(state = {current_user:false}, action) {
  switch (action.type) {

    // gets the user data from the login API call, if the username and password did not match, the API returns false
    // if they do match, the user that is returned from the API is set as the current user and login is set to true
    case "SET_CURRENT_USER_LOGIN":
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

        // assigns the current user on user sign up
        case "SET_CURRENT_USER_SIGNUP":
          user = action.payload.payload
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

//removes the current user from the Redux Store
    case 'DELETE_CURRENT_USER':
      return {
        ...state,
        current_user:  false
      }

// adds the a newly created project to the current_user's projects in Redux Store
      case 'CURRENT_USER_ADD_PROJECT':
        let project = action.payload.payload
        user = state.current_user
        user.projects.push(project)

        return {
          ...state,
          current_user:  user
        }

// deletes a project from the current_user's projects in the Redux Store
        case 'CURRENT_USER_DELETE_PROJECT':
          let deletedProject = action.payload.payload

          user = state.current_user
          let updatedProjects = user.projects.filter( project => project.id !== parseInt(deletedProject.project_id,10) )
          user.projects = updatedProjects
          return {
            ...state,
            current_user:  user
          }
// updates the current_user's info in the Redux Store
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
