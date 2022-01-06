import './menu.css';
import {useSelector} from 'react-redux';

export default function MenuButton() {
    
    const userState = useSelector(state => state.userState);
    console.log(userState);

    const logout = () => {
        localStorage.removeItem("FBIdToken");
        window.location.reload();

    }
    
    return (
        <div className="menu">
            <h2>
                {userState.authenticated?"@"+userState.credentials.handle:null}
            </h2>
            <button className="signout" onClick={logout}>
                SIGNOUT
            </button>
         </div>

    ); 
}



