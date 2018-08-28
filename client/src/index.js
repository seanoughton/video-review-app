import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


import registerServiceWorker from './registerServiceWorker';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native


import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage,
}





const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = createStore(
  persistedReducer,
  //rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

let persistor = persistStore(store)




ReactDOM.render(

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div>
        <App />
      </div>
    </PersistGate>

  </Provider>,
    document.getElementById('root')
);
