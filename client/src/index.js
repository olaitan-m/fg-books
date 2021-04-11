import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store, persistor } from './redux/store';
import { GlobalStyles } from './global-styles';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				<PersistGate persistor={persistor}>
					<GlobalStyles />
					<App />
				</PersistGate>
			</React.StrictMode>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.register();
