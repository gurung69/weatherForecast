import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({city, updateCity, getWeather}) {
    function handleChange(e){
        updateCity(e.target.value);
    }

    function handleSubmission(e){
        e.preventDefault();
        getWeather();
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