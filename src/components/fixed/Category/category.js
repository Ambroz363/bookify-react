import './category.css'

import { searchCategory } from "../../../redux/actions";

export default function Category(){

    return (

        <div className="category">
            <h3>Category</h3>
            <ul>
                <li> <button onClick = { () => searchCategory("") } >All</button> </li>
                <li> <button onClick = { () => searchCategory("Classic") } >Classic</button> </li>
                <li> <button onClick = { () => searchCategory("Fiction") } >Fiction</button> </li>
            </ul>
        </div>

    ) ; 

}