import { combineReducers } from 'redux';
import videosReducer from './videos_reducer';
import usersReducer from './users_reducer';
import projectsReducer from './projects_reducer';
import commentsReducer from './comments_reducer';
import loginReducer from './login_reducer';
import deleteItemReducer from './delete_item_reducer';

//combines all of the reducers 
const rootReducer = combineReducers({
  videos: videosReducer,
  users: usersReducer,
  projects: projectsReducer,
  comments: commentsReducer,
  current_user: loginReducer,
  item_to_delete: deleteItemReducer
});

export default rootReducer
