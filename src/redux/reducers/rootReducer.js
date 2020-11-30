import { combineReducers } from 'redux';
import postsDataReducer from './postsDataReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const persistConfig = {
// 	key: 'root',
// 	storage,
// 	whitelist: ['postsData'],
// };

const rootReducer = combineReducers({
	postsData: postsDataReducer,
});

export default rootReducer;
