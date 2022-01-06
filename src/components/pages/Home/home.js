import React, {useState , useEffect} from 'react';

import './home.css';
import Search from '../../fixed/Search/search';
import Category from '../../fixed/Category/category';
import Loading from '../../fixed/Loading/loading';
import BookCard from '../../bookCard/bookCard';
import {Link}from 'react-router-dom';


//Redux
import {useSelector} from 'react-redux';
import {getAllBooks} from '../../../redux/actions';


function Home() {

  // const [books , setItems] = useState([]);
  const books = useSelector( state => state.bookList.books );
  const isLoading = useSelector ( state => state.isLoading ) ; 
  const isLogged = useSelector( state => state.isLogged);
 

  useEffect(()=>{
    getAllBooks(); 
  },[]);

  return (
    <div>
      <div className="home">

        <div className="left-pane">
        <Search />
        <Category />
        {isLogged ?  <Link to="/addbook"><h3>Add Book</h3></Link> : null}
        </div>

        <div className="right-pane">
          { (isLoading)  
          ? <Loading />
          :<div className="book-list">
          {books.map(book =>(
            <BookCard book={book} /> 
          ))}
          </div>  
          }
        </div>
        
        
        
      </div> 
      
    </div>
  );

}

export default Home;

