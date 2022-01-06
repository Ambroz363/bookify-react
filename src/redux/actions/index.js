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

// export const set_search_state = () => {

//     return {
//         type : 'SET_SEARCH'
//     }
// }

export const setBookid = (bookID) => {
    store.dispatch({
        type: "SET_BOOKID" ,
        payload: bookID ,
    });
}

export const setAuth = (res) => {
    //Set token
    const FBIdToken = `Bearer ${res.token}`;
    localStorage.setItem("FBIdToken", FBIdToken);
    //Set LOG State
    store.dispatch(login());
}


export const getAllBooks = async () => {
        store.dispatch( {type: 'LOADING_TRUE'} );
        await axios.get('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/books')
        .then(res => {
        const books = res.data;
        store.dispatch( {type : 'BOOK_LIST' , payload : books } );
        store.dispatch( {type: 'LOADING_FALSE'} );    
      })
}

export const searchBooks = async (search_term) => {
    if(search_term === "") {
        await axios.get('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/books')
          .then(res => {
          const books = res.data;
          store.dispatch({ type: 'BOOK_LIST' , payload : books })
      })
    }else{
      await axios.post('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/books/search' , { searchTerm : search_term })
            .then(res => {
                const books = res.data;
                store.dispatch({ type: 'BOOK_LIST' , payload : books })
            })
            .catch((error)=>{
                alert(error)
            })
    }
}

export const searchCategory = async (category_term) => {
    if(category_term === "") {
        await axios.get('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/books')
          .then(res => {
          const books = res.data;
          store.dispatch({ type: 'BOOK_LIST' , payload : books })
      })
    }else{
      await axios.post('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/books/category' , { fullTerm : "genre:"+category_term })
            .then(res => {
                const books = res.data;
                store.dispatch({ type: 'BOOK_LIST' , payload : books })
            })
            .catch((error)=>{
                alert(error)
            })
    }
}
