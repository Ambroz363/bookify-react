import './addbook.css'
import React ,{useState} from 'react';

import axios from 'axios';
import store from '../../../redux/store';

function Addbook() {
    // Field States
    const [title , settitle] = useState('');
    const [author , setauthor] = useState('');
    const [isbnNumber ,  setisbnNumber] = useState('');
    const [description , setdescription] = useState('');
    const [language , setlanguage] = useState('');
    const [link , setlink] = useState('');
    const [year , setyear] = useState('');
    const [genre , setgenre] = useState('');

    const book = {
      title: title,
      isbnNumber: isbnNumber,
      rating: "No ratings yet",
      author: author,
      description: description,
      language: language,
      link: link,
      year: year,
      genre: genre,
    }

    

    // Posting Book
  const addbook = (e) => {
    e.preventDefault();

    axios
    .post('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/book' , book)
    .then((res) => {
      console.log(res);
      store.dispatch({ type : 'ADD_IMAGE'});
      localStorage.setItem("addImage", isbnNumber);
      alert("Book ADDED")
      window.location.reload();
    })
    .catch((error)=>{
      alert(error)
     });
  
  };

 

    return (
      <div className="signup">
        <div className="form">
          
              <div className="SIGNUP">
                  <h1>ADD YOUR BOOK</h1>
              </div>
              
              <div className="box">
                  <input type="text" placeholder="title" value={title} onChange={(e) => {settitle(e.target.value)}} />
              </div>
              
              <div className="box">
                <input type="text" placeholder="author" value={author} onChange={(e) => {setauthor(e.target.value)}}/> 
                <div className="box">
                <input type="text" placeholder="isbn Number" value={isbnNumber} onChange={(e) => {setisbnNumber(e.target.value)}}/>
              </div>
              </div>
              
              <div className="box">
                <textarea type="text" placeholder="description" value={description} onChange={(e) => {setdescription(e.target.value)}}/>
              </div>
              
              <div className="box">
                <input type="text" placeholder="language" value={language} onChange={(e) => {setlanguage(e.target.value)}}/>
              </div>

              <div className="box">
                <input type="text" placeholder="link" value={link} onChange={(e) => {setlink(e.target.value)}}/>
              </div>
              <div className="box">
                <input type="text" placeholder="year" value={year} onChange={(e) => {setyear(e.target.value)}}/>
              </div>
              <div className="box">
                <input type="text" placeholder="genre" value={genre} onChange={(e) => {setgenre(e.target.value)}}/>
              </div>

              <div className="box">
                <button onClick={(e)=> {addbook(e)} } >ADD</button>
              </div>
                
              
         
        </div>
        
    </div>
      
    );
  }
  
export default Addbook;
  