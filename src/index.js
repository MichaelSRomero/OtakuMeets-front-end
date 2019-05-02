//-------------REACT IMPORTS-------------//
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
//-------------REDUX IMPORTS-------------//
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
//------------REGULAR IMPORTS-----------//
import './style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import authReducer from './reducers/authReducer'
import personalityReducer from './reducers/personalityReducer'
import quizReducer from './reducers/quizReducer'
import usersReducer from './reducers/usersReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  personalityTracker: personalityReducer,
  quiz: quizReducer,
  users: usersReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
