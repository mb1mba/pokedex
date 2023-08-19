import React from "react";
import { Link } from "react-router-dom";

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
            <Link relative="path" to="."className="filter-button all">All</Link>
            {types.map(type => <Link  to={`?type=${type}` }className={`filter-button ${type}`}>{type}</Link>)}
        </div>
    )
}