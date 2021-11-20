import React ,{useState} from 'react';
import {Link}from 'react-router-dom';
import {useSelector} from 'react-redux';

import './navbar.css'
import MenuButton from '../Menu/menuButton/menubutton';
import Usermenu from '../Menu/userMenu/usermenu';


function Navbar() {

    const isLogged = useSelector(state => state.isLogged);
    const isMenu = useSelector( state => state.isMenu );
    const userState = useSelector( state => state.userState); 

    const [search, setSearch] = useState('');
    
    

    return (
        <div className="navbar">
           <header>
            <div className="search">
                <input type="text" placeholder="search Books..."  value={search} onChange={(e) => {setSearch(e.target.value)}} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
                <Link to='/search'>
                <button onClick = {() =>{localStorage.setItem("Search", search)} }><i className="fas fa-search"></i></button>
                </Link>
            </div>
                
               
            <div className="home">
               <Link to='/'>Bookify</Link>
            </div>

            <div className="user">
               {isLogged 
               ? 
                <div className="user">  
                    <MenuButton />
                </div>
               : 
               <div className="user">
                    <button> <Link to='/login'>Login</Link></button>
                    <button> <Link to='/signup'>SignUp</Link></button>
                </div> 
               }
            </div> 
            </header>
            <div className={isMenu?"side-menu active":"side-menu"}>
               <div className="Usermenu">
               {userState.authenticated ?  <Usermenu /> : null } 
               </div>
               

            </div> 
        </div>
    )
}
export default Navbar