import './usermenu.css';
import {Link}from 'react-router-dom';
import {useSelector} from 'react-redux';

const Usermenu = () => {

    const userState = useSelector(state => state.userState);
    
    
    
    //Try Logout
    const logout = () => {
        localStorage.removeItem("FBIdToken");
        window.location.reload();

    }

    return(
        <div className="usermenu" >
            <img src={userState.credentials.imageUrl} alt="userphoto"></img>
            <div>@{userState.credentials.handle}</div>
            <button><Link to='/addbook'>Addbook</Link></button>
            <button onClick={logout} >Logout</button>
            
        </div>

    );

}

export default Usermenu ;