import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { usersReducer } from './usersReducer';
import { messageReducer } from './messageReduces';
import { postReducer } from './postsReducer';
export const rootReducer = combineReducers({
    fetchUsersData: usersReducer,
    app: appReducer,
    sendingMessages: messageReducer,
    posts: postReducer,

})