import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import loggedReducer from './reducers/isLogged';
import menuReducer from './reducers/isMenu';
import userState from './reducers/userState';
import bookid from './reducers/bookid';
import isAddrev from './reducers/isAddrev'
import addIamge from './reducers/addIamge'


const initialState = {}; 

const middleware = [thunk];

const reducers = combineReducers({
    isLogged : loggedReducer,
    isMenu : menuReducer,
	userState : userState , 
	bookid : bookid ,
	isAddrev : isAddrev,
	addImage : addIamge,
});


const store = createStore(
	reducers,
	initialState,
	compose(
		applyMiddleware(...middleware),
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
