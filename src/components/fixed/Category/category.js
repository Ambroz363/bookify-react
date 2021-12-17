import { searchCategory } from "../../../redux/actions";

export default function Category(){

    return (

        <div className="category">
           
            <ul>
                <li> <button onClick = { () => searchCategory("") } >All</button> </li>
                <li> <button onClick = { () => searchCategory("Classic") } >Classic</button> </li>
                <li> <button onClick = { () => searchCategory("Fiction") } >Fiction</button> </li>
                <li> <button onClick = { () => searchCategory("aa") } >aa</button> </li>
            </ul>
        </div>

    ) ; 

}