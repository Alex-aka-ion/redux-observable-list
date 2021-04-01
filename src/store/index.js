import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import listReducer from "../reducers/list";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {fetchItemEpic, fetchServicesEpic} from "../epics";
import itemReducer from "../reducers/item";

const reducer = combineReducers({
    list: listReducer,
    item: itemReducer,
})

const epic = combineEpics(
    fetchServicesEpic,
    fetchItemEpic
);

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epic);

export default store;
