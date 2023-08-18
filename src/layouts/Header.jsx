import React, { useContext } from "react";
import { useLocation, Link, Outlet } from "react-router-dom";
import { PokemonSearchContext } from "../context/PokemonSearchContext";
import { Filters } from "./Filters";
function Header(){

    const { searchState, setSearchState } = useContext(PokemonSearchContext)
    const location = useLocation();
    const headerTitle = location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(1).slice(1);

    function handleChange(event){
        setSearchState({value: event.target.value})
    }

    return(
        <div className="container">
            <Link to="/"> &larr; Go back</Link>
            <h1>{headerTitle}</h1>
            <input 
                onChange={handleChange}
                value={searchState?.value}
                className="input"
                type="search" 
                placeholder={`Search for ${headerTitle}`}>
            </input>
                {location.pathname === "/pokemons"  ? <Filters />: null}
            <Outlet />
        </div>
    )
}

export default Header

