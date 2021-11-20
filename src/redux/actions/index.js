import store from '../store'
import axios from 'axios'

export const login = (FBIdToken) => {
    //Set Header
    axios.defaults.headers.common["Authorization"] = FBIdToken;
    return {
        type : 'LOG_IN'
    }
    
};

export const logout =() => {
    //Remove Header
    axios.defaults.headers.common["Authorization"] = "";
    return {
        type : 'LOG_OUT'
    };
};

// export const menuaction = () => {
//     return {
//         type : 'MENU'
//     } ; 
// } ;


export const setAuth = (res) => {
    //Set token
    const FBIdToken = `Bearer ${res.token}`;
    localStorage.setItem("FBIdToken", FBIdToken);
    
    //Set LOG State
    store.dispatch(login());
}


