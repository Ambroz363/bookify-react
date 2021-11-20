import React, {useState , useEffect} from 'react';
import {Link}from 'react-router-dom';
import './home.css';
import axios from 'axios';
import store from '../../../redux/store';


function Home() {

  useEffect(()=>{
    fetchbooks(); 
  },[]);

  const [books , setItems] = useState([]);

  async function fetchbooks() {
    await axios.get('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/books')
    .then(res => {
        const books = res.data;
        setItems(books);
    })
  }

  function setBookid(bookID){
      localStorage.setItem("bookId", bookID);
      store.dispatch({
      type: "SET_BOOKID" ,
      payload: bookID ,
    });
  }


  return (
    <div>
      <div className="Home">
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

export default Home;

