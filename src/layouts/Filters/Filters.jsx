import React from "react";
import { Link } from "react-router-dom";
import './filters.css'

function Filters(){
    const [isActive, setIsActive] = React.useState("all")

    const handleButtonClick = (type) => {
        if(type !== isActive){
            setIsActive(type)
        }
    };
    
    const types = [
        "all",
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

    const filters = types.map((type, index) => 
        <Link
            key={type}
            onClick={() => handleButtonClick(type)} 
            to={index === 0 ? "." : `?type=${type}`}
            relative={index === 0 ? "path" : undefined}
            className={`filter-button border-${type} ${isActive === type ? "active" : ""} `}>
                {type}
        </Link>)

    return (
        <div className="filter-container">
            {filters}
        </div>
    )
}

export default React.memo(Filters)