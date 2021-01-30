import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './redux/rootReducer'
import { BrowserRouter } from 'react-router-dom';
const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  )
));

const app = (
  
    <Provider store={store}>
       <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root')
);

reportWebVitals();
