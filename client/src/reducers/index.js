import { combineReducers } from 'redux';
import videosReducer from './videos_reducer';


const rootReducer = combineReducers({
  videos: videosReducer
});

export default rootReducer
