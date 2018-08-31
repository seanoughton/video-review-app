export default function deleteItemReducer(state = {loading: false, item_to_delete: []}, action) {
  switch (action.type) {


      case 'ADD_ID':
        console.log(action)
        return {
          ...state,
          item_to_delete: [ ...state.item_to_delete, action]
        }



    default:
      return state;

  }
}
