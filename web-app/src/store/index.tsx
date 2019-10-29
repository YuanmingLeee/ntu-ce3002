import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import diagram from './diagram/reducer';

const rootReducer = combineReducers({ diagram });

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
