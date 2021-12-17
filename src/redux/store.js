import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//Reducers
import isLoggedReducer from './reducers/isLogged';
import userStateReducer from './reducers/userState';
import bookidReducer from './reducers/bookid';
import searchStateReducer from "./reducers/searchState";
import bookListReducer from "./reducers/booklist";


const initialState = {}; 

const middleware = [thunk];

const reducers = combineReducers({
    isLogged : isLoggedReducer,
	userState : userStateReducer , 
	bookid : bookidReducer ,
	searchState : searchStateReducer ,
	bookList : bookListReducer , 	
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
