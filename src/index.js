import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {reducers} from './reducers';
import {AppProvider} from './context';
import './index.css';
import App from './App';

export const store = createStore(reducers, compose(applyMiddleware(thunk)));//creates a store so selected states can be accessed globally

ReactDOM.render(
    <Provider store={store}>
        <AppProvider>
            <App/>
        </AppProvider>
    </Provider>, 
    document.getElementById('root')
);