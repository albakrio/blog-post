import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

// const initialState = {};
const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
	middleware.push(logger);
}
export const store = createStore(
	rootReducer,
	// initialState,
	applyMiddleware(...middleware)
);
// export const persistor = persistStore(store);
