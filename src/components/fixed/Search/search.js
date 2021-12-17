import './search.css'

import { useState } from 'react';

import { searchBooks } from '../../../redux/actions'; 

export default function Search() {

    const [search, setSearch] = useState('');

    return (
        <div className="search">
            <input type="text" placeholder="search Books..."  value={search} onChange={(e) => {setSearch(e.target.value)}} />
            <button onClick = {() => searchBooks(search) }>Search</button>   
        </div>
    ) ;

}