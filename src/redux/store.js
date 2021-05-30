import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { formReducer } from "./reducers/reduces";


const comRed = combineReducers({
    forms: formReducer,

})

export const store = createStore(comRed, composeWithDevTools(applyMiddleware(thunk)));