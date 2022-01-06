import './bookCard.css'

import {Link}from 'react-router-dom';
import { setBookid } from '../../redux/actions/index';

export default function BookCard(props) {

    const book = props.book;

    return (
        <div className="book-card">
            <Link to='/book'  onClick = {() => setBookid(book.isbnNumber) }>
            <div key={book.isbnNumber} className="bookcard">
                <div className="card-top">
                    <div className="left">
                        <div className="cover"><img src={book.coverImage} alt="bookcover" width="150px"/></div>
                    </div>
                    <div className="right">
                        <div className="Book-Name"><h4>{book.title}</h4></div>
                        <div className="Genre">Genre: {book.genre+" "}</div>
                        <div className="Rating">Rating: {book.ratings ? Math.round((book.ratings + Number.EPSILON) * 100) / 100 : "N/A"}</div>
                    </div>
                    
                    
                </div>
                <div className="card-bottom">
                    <div className="Description"> {book.description} </div>
                </div>
          </div>
          </Link>
        </div>
    ) ;

}