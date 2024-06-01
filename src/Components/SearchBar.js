import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({city, updateCity}) {
    function handleChange(e){
        updateCity(e.target.value);
    }

    function handleSubmission(e){
        e.preventDefault();
    }
    return(
        <div className="search-bar">
            <form onSubmit={handleSubmission}>
                <FaSearch style={{position: "absolute", fontSize: "17px", margin: "8px 0 0 10px"}}/> 
                <input type="text" className="search" placeholder="Find a City..." value={city} onChange={handleChange}></input>
            </form>
        </div>
    )
}