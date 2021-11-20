import axios from "axios";
import React, {useState , useEffect} from 'react';
import './search.css';

function SearchResult(){


        useEffect(()=>{
            fetchbooks(); 
        },[]);

        const [books , setItems] = useState([]);
        const search = {
            searchTerm: localStorage.getItem("Search")
        }
        console.log (search);

        async function fetchbooks() {
            await axios.post('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/books/search' , search)
            .then(res => {
                const books = res.data;
                console.log(books);
                setItems(books);
                
            })
            .catch((error)=>{
               
                alert(error)
                })
        
          }


        return (
            <div className="search">
                {books.map(books =>(
                    <div key={books.isbnNumber} className="bookcard"> 
                    <div className="cover"><img src={books.coverImage} alt="bookcover" width="100px"/></div>
                    <div className="Book-Name">Book-Name: {books.title}</div>
                    <div className="Genre">Genre: {books.genre}</div>
                    <div className="Rating">Rating: {books.ratings ? Math.round((books.ratings + Number.EPSILON) * 100) / 100 : "No Ratings yet"}</div>
                    <div className="Description"> {books.description} </div>
                    </div>
          
                ))}
            </div>
        );
    


}

export default SearchResult;