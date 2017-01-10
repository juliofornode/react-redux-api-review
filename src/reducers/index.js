import { combineReducers } from 'redux';
import postsFetchedByReducer from './reducer_fetch_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  postsFetched: postsFetchedByReducer,
  form: formReducer
});

export default rootReducer;
