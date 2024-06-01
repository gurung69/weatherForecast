import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({city, updateCity}) {
    function handleChange(e){
        updateCity(e.target.value);
    }
    return(
        <div className="search-bar">
            <FaSearch /> 
            <input type="text" className="search" placeholder="Find a City..." value={city} onChange={handleChange}></input>
        </div>
    )
}