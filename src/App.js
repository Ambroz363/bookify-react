import React from 'react';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import jwtDecode from "jwt-decode";
import axios from 'axios';

// Pages
import Navbar from'./components/Navbar/navbar';
import Home from './components/Home/home';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import Footer from './components/Footer/footer';
import Bookpage from './components/Bookpage/bookpage';
import Addbook from './components/Addbook/addbook';

// Redux
import {useSelector} from 'react-redux';
import {login , logout } from './redux/actions';
import store from './redux/store';


function App() {
  
  const isLogged = useSelector(state => state.isLogged);

  

  const token = localStorage.getItem("FBIdToken");

  const getUserData = () => {
    axios
    .get('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/user')
    .then((res) => {
        store.dispatch({
          type: "SET_USER",
          payload: res.data,
        });
    })
    
}
  

  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      store.dispatch(logout());
    } else {
      store.dispatch(login());
      axios.defaults.headers.common["Authorization"] = token;
      getUserData();
    }
  }


  return (
    <div className="App">
      <Router>
        <Navbar  />
            <Switch>
              <Route path="/" exact component={isLogged ? Home : Login} />
              <Route path="/login" component={isLogged ? Home : Login} />
              <Route path="/signup" component={isLogged ? Home : Signup}/>
              <Route path="/book" component ={isLogged ? Bookpage : Login} />
              <Route path="/addbook" component ={isLogged ? Addbook : Home} />
            </Switch>
        <Footer />    
  </Router>
    </div>
  )

}

export default App 