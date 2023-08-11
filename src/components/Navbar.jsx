import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar({currentPokemon}){
    return(
        <div className={`data-container`}>
            <nav className="nav-link-container">
                <NavLink to="" end className={({isActive}) => isActive ? "active-link" : null}>About</NavLink>
                <NavLink to="stats" className={({isActive}) => isActive ? "active-link" : null}>Base Stats</NavLink>
                <NavLink to="evolution " className={({isActive}) => isActive ? "active-link" : null}>Evolution</NavLink>
                <NavLink to="moves" className={({isActive}) => isActive ? "active-link" : null}>Moves</NavLink>
            </nav>
            <Outlet context={currentPokemon}/>
        </div>
    )
}