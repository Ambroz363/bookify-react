import store from '../store'
import axios from 'axios'

export const login = () => {
    return {
        type : 'LOG_IN'
    }
    
};

export const logout =() => {
    return {
        type : 'LOG_OUT'
    };
};

export const menuaction = () => {
    return {
        type : 'MENU'
    } ; 
} ;

export const tryAuth = (res) => {

    setAuthid(res.token);
    store.dispatch(login());

};

export const setAuthid = (token) => {

    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem("FBIdToken", FBIdToken);
    axios.defaults.headers.common["Authorization"] = FBIdToken;
}


