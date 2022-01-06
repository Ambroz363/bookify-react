import './search.css'

import { useState } from 'react';

import { searchBooks } from '../../../redux/actions'; 

export default function Search() {

    const [search, setSearch] = useState('');

    return (
        <div className="search">
            <input type="text" placeholder="Search for a book..."  value={search} onChange={(e) => {setSearch(e.target.value)}} />
            <button onClick = {() => searchBooks(search) }><img src="https://img.icons8.com/ios-glyphs/50/000000/search.png"  width="20px" /></button>   
        </div>
    ) ;

}