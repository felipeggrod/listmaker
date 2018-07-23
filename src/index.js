import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { compose, combineReducers, createStore } from 'redux';

//provider to give access to the store, to every container component, without passing it explicitly
import {Provider} from 'react-redux';
import {itemListReducer} from './reducers/ItemListReducer';

const allReducers = combineReducers({
    root: (state = {}) => state, //initialize the root field
    itemList: itemListReducer
});


const allStoreEnhancers = compose (
    //applyMiddleware(thunk),
    //window.devToolsExtension && window.devToolsExtension(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const store = createStore(
    allReducers, {
        root: ''
    },
    allStoreEnhancers
);


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
