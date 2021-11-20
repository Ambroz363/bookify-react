import './login.css';

import React ,{useState} from 'react';
import axios from 'axios';

import {tryAuth} from '../../../redux/actions'


function Login() {

  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');

  const user = {
    email : username ,
    password : password,
  }
  
  

  // Posting Login
  const login = (e) => {
    e.preventDefault();

    axios
    .post('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/login' , user)
    .then( (res) => {
      tryAuth(res.data)
    })
    .catch((error)=>{
      alert(error)
    })
  }
  
  return (
    <div className="login">
        <div className="form">
          <div>
              <div className="form_elements">
                <h1>LOGIN HERE</h1>
              </div>
              
             <div className="form_elements">
                <label htmlFor="email">Email:</label><br />
                <input  type="text" placeholder="email" value={username} onChange={(e) => {setUsername(e.target.value)}} />
             </div>

              <div className="form_elements">
                <label htmlFor="password">Password:</label><br />
                <input type="password" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
              </div>
              <div className="form_elements">
                <button onClick={(e) => login(e)} >Login</button>
              </div>
          </div>
        </div>
        
    </div>
    
  );
}

export default Login;
