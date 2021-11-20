import './menubutton.css';

export default function MenuButton(props) {
    
    
    return (
        <div className="menubutton">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <button onClick ={ () => {props.toggleMenu()}} ><i className="fas fa-align-right"></i></button>
         </div>

    ); 
}



