import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import './navbar.css'
import Menu from '../Menu/menu/menu';
import Usermenu from '../Menu/userMenu/usermenu';
// import Search from '../Search/search';


function Navbar() {
    //Global States
    const isLogged = useSelector( state  => state.isLogged);
    const userState = useSelector( state => state.userState); 

    //Local States
    const [menuActive , setMenuActivity] = useState(false);
    
    //Handling the Menu Toggling
    function handleMenu() {
        setMenuActivity(!menuActive);
    }

    return (
        <div className="navbar">
            <div className="navbar-main-logo">
               <Link to='/'><h1>Bookify.</h1></Link>
            </div>

            <div className="navbar-user-state">
               {isLogged 
               ?   
                <Menu />
               : 
               <div className="login-signup">
                    <button> <Link to='/login'>Login</Link></button>
                    <button> <Link to='/signup'>SignUp</Link></button>
                </div> 
               }
            </div> 
            {/* <div className={menuActive?"side-menu active":"side-menu"}>
               <div className="Usermenu">
               {userState.authenticated ?  <Usermenu/> : null } 
               </div>
            </div>  */}
        </div>
    )
}
export default Navbar