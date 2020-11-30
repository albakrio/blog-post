import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import logo from './logo.svg';
import './App.css';
import Posts from './components/posts/Posts';
import { store, persistor } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<Provider store={store}>
			<Posts />
		</Provider>
	);
};

export default App;
