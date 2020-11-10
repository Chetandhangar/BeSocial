import {createStore, combineReducers, applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';

//all reducers

import dataReducer from  './reducers/dataReducer';
import userReducer from './reducers/userReducer';
import uiReducer from './reducers/uiReducer';

const initialState ={};

const middleware = [thunk];

const reducers= combineReducers({
    user: userReducer,
    data : dataReducer,
    UI : uiReducer
});

 const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

