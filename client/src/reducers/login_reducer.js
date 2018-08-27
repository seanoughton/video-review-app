export default function loginReducer(state = {current_user:false}, action) {
  switch (action.type) {


    case "SET_CURRENT_USER":
      console.log(action.payload)
    let user = action.payload
    return {
      ...state,
      current_user:  user
    }


    default:
      return state;
  }
}
