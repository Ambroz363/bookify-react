import './menubutton.css';
import {menuaction} from '../../../../redux/actions'
import store from '../../../../redux/store'


export default function MenuButton() {
    
    
    return (
        <div className="menubutton">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <button onClick ={() => store.dispatch(menuaction())} ><i className="fas fa-align-right"></i></button>
         </div>

    ); 
}



