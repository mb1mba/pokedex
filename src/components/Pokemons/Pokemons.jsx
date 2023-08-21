import React from "react";
import { Link } from "react-router-dom";
import { getImageURL } from "../../utils/getImageUrl";
import './pokemons.css'

export default function Pokemons({element}){
    const types = element.types.map(obj => obj.type.name)
    const styles = types[0]
    const image = element && getImageURL(element.id)

    return (
    <div aos-data="fade-up">
        <Link to={`${element.id}`} className={`pokemon-container ${styles}`} key={element.id}>
            <div className="pokemon-data" key={element.id}>
                <h2 className="pokemon-name">{element.name}</h2>
                <div className="pokemon-types">
                    {types.map(type => 
                        <p key={type} className="pokemon-type">
                        {type}  
                        </p>
                        )}
                </div>
            </div>

            <div>
                <img className="pokemon-img"  src={image}></img>
            </div>
        </Link>
    </div>

)}