import { combineReducers, createStore } from "redux";
import ContentReducer from "./reducers/content.reducers";


const reducers = {
    content: ContentReducer,
}

const rootReducer =  combineReducers(reducers)

const store = createStore(rootReducer)

export default store