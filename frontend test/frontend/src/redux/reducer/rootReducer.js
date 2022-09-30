import { combineReducers } from 'redux';
import allArticleReducer from './allArticleReducer';
import allCommentReducer from './allCommentReducer';

const rootReducer = combineReducers({
  art: allArticleReducer,
  com: allCommentReducer,
});

export default rootReducer;
