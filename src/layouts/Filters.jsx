import React, { useContext } from "react";

import { PokedexContext } from "../context/PokedexContext";

export function Filters({}){
    const types = [
        "grass", 
        "fire", 
        "water",
        "bug", 
        "poison", 
        "flying", 
        "normal",  
        "electric",
        "fairy",
        "ground",
        "fighting",
        "steel",
        "ghost",
        "rock",
        "psychic",
        "ice",
        "dragon" 
        ]

    return (
        <div className="filter-container">
            {types.map(type => <button className={`filter-button ${type}`}>{type}</button>)}
        </div>
    )
}