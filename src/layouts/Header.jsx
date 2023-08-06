import React from "react";
import { useLocation, Link, Outlet } from "react-router-dom";

function Header(){
    const location = useLocation();
    const headerTitle = location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(1).slice(1);
    console.log(location)
    return(
        <header>
            <Link to="/"> &larr; Go back</Link>
            <h1>{headerTitle}</h1>
            <input type="search" placeholder={`Search for ${headerTitle}`}></input>
            {location.pathname === "/pokemons"  ? <p>filters</p>: null}
            <Outlet />
        </header>
    )
}

export default Header

