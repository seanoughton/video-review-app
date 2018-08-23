import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SetStore from './SetStore';

import registerServiceWorker from './registerServiceWorker';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)






ReactDOM.render(

  <Provider store={store}>
    <div>
      <App />
      <SetStore />
    </div>

  </Provider>,
    document.getElementById('root')
);
