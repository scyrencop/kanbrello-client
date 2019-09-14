import React from 'react';
import ReactDOM from 'react-dom';
/** redux part */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import  ReduxThunk   from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const middleware = [ReduxThunk, createLogger(rootReducer)]

const store = createStore(rootReducer, {} , applyMiddleware(...middleware));

const Root = ({ store }) => (
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  )
