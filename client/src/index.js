import React from 'react';
import ReactDOM from 'react-dom'; // takes React elements and updates the DOM with the appropriate HTML
// ReactDOM compares React Elements and their children the their previous ones, and only applies a DOM change if necessary
// Components are like javascript functions, they accept input and return something, they accept props and return React elements that describe what should be rendered to the screen
import './index.css';
import App from './App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


import registerServiceWorker from './registerServiceWorker'; // allows the user access to a cached page when not online

//Provider will alert our app when there has been a change in state, and this will re-render the app, means you don't have to pass down Redux store state as props
import { Provider } from 'react-redux';
// import createStore method from Redux Library
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // middlware for async fetch requests
import rootReducer from './reducers';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native


import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer) // for redux persist

//createStore() returns an instance of the Redux store
// pass createStore() the combined reducers
// the store gets passed to Provider in the render method
const store = createStore(
  persistedReducer,
  //rootReducer, using Redux Persist to help with page refreshes
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

let persistor = persistStore(store) // for redux persist


ReactDOM.render(

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <div>
        <App />
      </div>
    </PersistGate>

  </Provider>,
    document.getElementById('root')
);

// everything inside the root element is managed by React DOM,
