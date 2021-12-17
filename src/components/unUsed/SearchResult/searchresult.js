import React, {useState , useEffect} from 'react';
import {Link}from 'react-router-dom';
import './search.css';
import axios from 'axios';
import Search from '../../fixed/Search/search';


//Redux
import {useSelector} from 'react-redux';
import store from '../../../redux/store';


function SearchResult(props) {

  const [books , setItems] = useState([]);
  // const [searchState , setsearchState] = useState( useSelector(state => state.searchState) );
  // const searchState = useSelector(state => state.searchState );

  const searchState = useSelector( state => state.searchState );

  useEffect(()=>{
    fetchbooks(); 
  },[searchState]);

  async function fetchbooks() {
    if(searchState === "") {
        await axios.get('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/books')
          .then(res => {
          const books = res.data;
          setItems(books);
      })
    }else{
      await axios.post('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/books/search' , { searchTerm : searchState.state })
            .then(res => {
                const books = res.data;
                setItems(books);
            })
            .catch((error)=>{
                alert(error)
            })
    } 
  }

  function setBookid(bookID){
      // localStorage.setItem("bookId", bookID);
      store.dispatch({
      type: "SET_BOOKID" ,
      payload: bookID ,
    });
  }


  return (
    <div>
      <div className="Home">
        <Search />
        {books.map(books =>(
          <Link to='/book'  onClick = {() => setBookid(books.isbnNumber) }>
            <div key={books.isbnNumber} className="bookcard"> 
              <div className="cover"><img src={books.coverImage} alt="bookcover" width="100px"/></div>
              <div className="Book-Name">Book-Name: {books.title}</div>
              <div className="Genre">Genre: {books.genre}</div>
              <div className="Rating">Rating: {books.ratings ? Math.round((books.ratings + Number.EPSILON) * 100) / 100 : "No Ratings yet"}</div>
              <div className="Description"> {books.description} </div>
          </div>
          </Link>
        ))}
      </div> 
      
    </div>
  );

}

export default SearchResult;

