import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './custom.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { compose, combineReducers, createStore } from 'redux';

//provider to give access to the store, to every container component, without passing it explicitly
import {Provider} from 'react-redux';
import {listReducer} from './reducers/ListReducer';

const allReducers = combineReducers({
    root: (state = {}) => state, //initialize the root field
    list: listReducer
});


const allStoreEnhancers = compose (
    //applyMiddleware(thunk),
    //window.devToolsExtension && window.devToolsExtension(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const store = createStore(
    allReducers, {
        root: '',
        list: [{
            "id": 0,
            "name": "List",
            "items": [
                {
                "id": 2, 
                "name": "Sub Descr",
                "items": [
                    {
                    "id": 5, 
                    "name": "Sub Sub Descr"
                    }
                ]
                },
                {
                "id": 3,
                "name": "Sub Descr2"
                }
            ]},{
                "id": 6,
                "name": "Descre"
            }
        ]
    },
    allStoreEnhancers
);


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
