import React, {useState , useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import './bookpage.css';
import Reviews from './components/reviews';
import AddReviews from './components/Addreview/addreview';
import store from '../../../redux/store'


export default function Bookpage() {

    useEffect(()=>{
        bookdetails(); 
      },[]);
    //Fetch Book Details  
    const bookid = localStorage.getItem("bookId");
    const url = 'https://asia-south1-bookify-5fa22.cloudfunctions.net/api/books/' + bookid

    async function bookdetails() {
        await axios
        .get(url)
        .then(res => {
            const book = res.data;
            setBook(book);
        });
    }
    //Set Book Details
    const [book , setBook] = useState([]);
    //Handle AddReview Dialog
    const [addreview_dialog , setaRD] = useState(false);

    function handleDialogMount() {
        setaRD(!addreview_dialog);
    }
  
    return(
        <div className="view">
            <div key={book.isbnNumber} className="bookcard"> 
              <div className="cover"><img src={book.coverImage} alt="bookcover" width="200px"/></div>
              <div className="Book-Name">Book-Name: {book.title}</div>
              <div className="Genre">Genre: {book.genre+ " "}</div>
              <div className="Rating">Rating: {Math.round((book.ratings + Number.EPSILON) * 100) / 100}</div>
              <div className="author">Author: {book.author}</div>
              <div className="language">Language: {book.language}</div>
              <div className="link">Link: <a href= {book.link} target="_blank">{book.link}</a></div>
              <div className="Description"> {book.description} </div>
            </div>
            
            <div className="Reviews">   
                <h1>Reviews</h1>

                <button onClick= {() => handleDialogMount()}>Add Review</button>
                {addreview_dialog ? < AddReviews unMountMe = {handleDialogMount} /> : null}  
                

                {book.reviews ? <Reviews review = {book.reviews}/> : null}
            </div>  
        </div>
    );
}




