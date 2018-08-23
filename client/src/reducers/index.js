import { combineReducers } from 'redux';
import videosReducer from './videos_reducer';
import usersReducer from './users_reducer';
import projectsReducer from './projects_reducer';
import commentsReducer from './comments_reducer';


const rootReducer = combineReducers({
  videos: videosReducer,
  users: usersReducer,
  projects: projectsReducer,
  comments: commentsReducer
});

export default rootReducer
