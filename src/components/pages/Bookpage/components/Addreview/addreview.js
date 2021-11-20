import axios from 'axios';
import React ,{ useState} from 'react';
import {useSelector} from 'react-redux';
import store from '../../../../../redux/store';
import './addreview.css';
import {Link}from 'react-router-dom';

export default function AddReviews(props) {

        const [body , setbody] = useState('');
        const userState = useSelector(state => state.userState);
        const bookid = useSelector(state => state.bookid.state);

        
        const url = 'https://asia-south1-bookify-5fa22.cloudfunctions.net/api/book/'+ bookid +'/review'; 

        

   
        const send = {
            body : body,
            userHandle : userState.credentials.handle , 
            userImage  : userState.credentials.imageUrl , 
        }
       
        const setBookid = (passId) => {
            store.dispatch({
            type: "SET_BOOKID" ,
            payload: passId ,
          });
        }

        const addrev = () => {
            axios
            .post(url , send)
            .then((res) => {
                console.log(res);
                setbody(" ");
                store.dispatch({ type : 'IS_ADD'})
                


              })
              .catch((error)=>{
                alert(error)
               });
            
            };

        

        

        return (
            <div className="addreview">
                 <textarea  type="text" placeholder="type here..." value={body} onChange={(e) => {setbody(e.target.value)}} />
                 {/* <Link to='/book'  onClick = {() => {setBookid(bookid)} } > */}
                 <button className="submit" onClick= {()=>{addrev()}} >Review!!</button>
                    {/* </Link> */}
                 <button className="close" onClick = {() => props.unMountMe()}><i class="far fa-window-close"></i></button>
            </div>
        
        );

    }



