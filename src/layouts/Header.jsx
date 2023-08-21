import React, { useContext } from "react";
import { useLocation, Link, Outlet } from "react-router-dom";
import { PokemonSearchContext } from "../context/PokemonSearchContext";
import Filters from "./Filters/Filters";
function Header(){
    const { searchState, setSearchState } = useContext(PokemonSearchContext)
    const location = useLocation();
    const headerTitle = location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(1).slice(1);

    function handleChange(event){
        setSearchState({value: event.target.value})
    }

    return(
        <div className="container">
            <Link to="/"> &larr;</Link>
            <h1 className="layout-title">{headerTitle}</h1>
            <input 
                onChange={handleChange}
                value={searchState?.value}
                className="input"
                type="search" 
                placeholder={`Search for ${headerTitle}`}>
            </input>
                {location.pathname === "/pokemons" || location.pathname === "/moves" ? <Filters />: null}
            <Outlet />
        </div>
    )
}

export default React.memo(Header)

