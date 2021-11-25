import React ,{useState} from 'react';
import {Link}from 'react-router-dom';
import {useSelector} from 'react-redux';

import './navbar.css'
import MenuButton from '../Menu/menuButton/menubutton';
import Usermenu from '../Menu/userMenu/usermenu';

//Redux
import store from '../../../redux/store';


function Navbar() {
    //Global States
    const isLogged = useSelector( state  => state.isLogged);
    const userState = useSelector( state => state.userState); 

    //Local States
    const [search, setSearch] = useState('');
    const [menuActive , setMenuActivity] = useState(false);
    
    //Handling the Menu Toggling
    function handleMenu() {
        setMenuActivity(!menuActive);
    }

    return (
        <div className="navbar">
           <header>
            <div className="search">
                <input type="text" placeholder="search Books..."  value={search} onChange={(e) => {setSearch(e.target.value)}} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
                <Link to='/search'>
                <button onClick = {() =>{ store.dispatch({ type : 'SET_SEARCH' , payload : search }) } }><i className="fas fa-search"></i></button>
                </Link>
            </div>
                
               
            <div className="home">
               <Link to='/'>Bookify</Link>
            </div>

            <div className="user">
               {isLogged 
               ? 
                <div className="user">  
                    <MenuButton toggleMenu={handleMenu}/>
                </div>
               : 
               <div className="user">
                    <button> <Link to='/login'>Login</Link></button>
                    <button> <Link to='/signup'>SignUp</Link></button>
                </div> 
               }
            </div> 
            </header>
            <div className={menuActive?"side-menu active":"side-menu"}>
               <div className="Usermenu">
               {userState.authenticated ?  <Usermenu/> : null } 
               </div>
               

            </div> 
        </div>
    )
}
export default Navbar