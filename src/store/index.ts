import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {rootReducer} from "./reducer";

export const store = createStore(
    rootReducer (),
    compose(
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    ),
);

export default store;