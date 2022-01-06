import React, {useState , useEffect} from 'react';
import axios from 'axios';

import './bookpage.css';
import Reviews from './components/reviews';
import AddReviews from './components/Addreview/addreview';
import Loading from '../../fixed/Loading/loading';

//Redux
import {useSelector} from 'react-redux';
import store from '../../../redux/store';

export default function Bookpage() {

    const isLoading = useSelector ( state => state.isLoading ) ; 
    const isLogged = useSelector ( state => state.isLogged );
    useEffect(()=>{
        bookdetails(); 
      },[]);
    //Fetch Book Details  
    const bookid = useSelector(state => state.bookid);
    const url = 'https://asia-south1-bookify-5fa22.cloudfunctions.net/api/books/' + bookid.state

    async function bookdetails() {
        store.dispatch( {type:'LOADING_TRUE'} );
        await axios
        .get(url)
        .then(res => {
            const book = res.data;
            setBook(book);
        });
        store.dispatch( {type:'LOADING_FALSE'} );
    }
    //Set Book Details
    const [book , setBook] = useState([]);
    //Handle AddReview Dialog
    const [addreview_dialog , setaRD] = useState(false);

    function handleDialogMount() {
        setaRD(!addreview_dialog);
    }
  
    return(
        <div className="book-page-container">
            { (isLoading) 
            ? <Loading /> 
            : <div className="bookpage-sub-cont">
                <div key={book.isbnNumber} className="book-details">
                    <div className="book-details-top">
                        <div className="book-details-left">
                            <div className="cover"><img src={book.coverImage} alt="bookcover" width="200px"/></div>
                        </div>
                        <div className="book-details-right">
                            <div className="book-details-right-sub1">
                                <div className="Book-Name"><h4>{book.title}</h4></div>
                            </div>
                            <div className="book-details-right-sub2">
                                <div className="author">{book.author}</div>
                                <div className="Rating">Rating: {Math.round((book.ratings + Number.EPSILON) * 100) / 100}</div>
                            </div>
                            <div className="book-details-right-sub1">
                                <div className="Genre">{book.genre+ ""}</div>
                               
                            </div>
                            <div className="book-details-right-sub1">

                                <div className="language">Language: {book.language}</div>
                            </div>
                            
                            <div className="book-details-right-sub1">
                                <div className="link"><a href= {book.link} target="_blank"><h5>Purchase the Book Here!!!</h5></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="book-details-bottom">
                        <div className="Description"> {book.description} </div>
                    </div>                  
                </div>
                
                <div className="Reviews-cont">
                    <div className="tab-1">
                        <h4>Reviews</h4>    
                        <div className="review-button-container">
                            { isLogged 
                                ? <button onClick= {() => handleDialogMount()}>Add Review</button> 
                                : <h6>Login In to Review this book.</h6>
                            }
                        </div>
                    </div>
                {addreview_dialog ? < AddReviews unMountMe = {handleDialogMount} /> : null}  
                {book.reviews ? <Reviews review = {book.reviews}/> : null}
                </div>  
            </div>}
        </div>
    );
}




