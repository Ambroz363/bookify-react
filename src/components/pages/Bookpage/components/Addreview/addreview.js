import axios from 'axios';
import React ,{ useState} from 'react';
import {useSelector} from 'react-redux';

import './addreview.css';

export default function AddReviews(props) {

        const [body , setbody] = useState('');
        const userState = useSelector(state => state.userState);
        const bookid = useSelector(state => state.bookid.state);

        
        const url = 'https://asia-south1-bookify-5fa22.cloudfunctions.net/api/book/'+ bookid +'/review'; 

        const review = {
            body : body,
            userHandle : userState.credentials.handle , 
            userImage  : userState.credentials.imageUrl , 
        }

        function addReview() {
            axios
            .post(url , review)
            .then((res) => {
                console.log(res);
                setbody(" ");
                props.unMountMe();
              })
              .catch((error)=>{
                alert(error)
               });
            
            };

    
        return (
            <div className="addreview">
                 <textarea  type="text" placeholder="type here..." value={body} onChange={(e) => {setbody(e.target.value)}} />
                 {/* <Link to='/book'  onClick = {() => {setBookid(bookid)} } > */}
                 <button className="submit" onClick= {() => addReview()} >Review!!</button>
                    {/* </Link> */}
                 <button className="close" onClick = {() => props.unMountMe()}><i class="far fa-window-close"></i></button>
            </div>
        
        );

    }



