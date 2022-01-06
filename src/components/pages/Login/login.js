import './login.css';

import React ,{useState} from 'react';
import axios from 'axios';

import {setAuth} from '../../../redux/actions'


function Login() {

  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');

  const user = {
    email : username ,
    password : password,
  }
  
  

  // Posting Login
  async function login(e) {
    e.preventDefault();

    await axios
    .post('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/login' , user)
    .then( (res) => {
      setAuth(res.data);
    })
    .catch((error)=>{
      alert(error)
    })
  }
  
  return (
          <div className="signup">
          <div className="form">
            
                <div className="SIGNUP">
                    <h1>LOGIN!!</h1>
                </div>
                
                <div className="emailin">
                    <input type="text" placeholder="email" value={username} onChange={(e) => {setUsername(e.target.value)}} />
                </div>
                
                <div className="passin">
                  <input type="password" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/> 
                </div>
                
                
                <div className="buttonarea">
                  <button onClick={(e) => login(e)} >LOGIN</button>
                </div>
                  
                
           
          </div>
          
      </div>
  );
}

export default Login;
