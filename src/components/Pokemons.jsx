import React from "react";
import { Link } from "react-router-dom";

export default function Pokemons({pokemon}){
    const types = pokemon.types.map(obj => obj.type.name)
    const styles = types[0]
    const image = pokemon.sprites && pokemon.sprites.other["official-artwork"]["front_default"]
    
    return (
    <Link to={`${pokemon.id}`} className={`pokemon-container ${styles}`} key={pokemon.id}>
        <div className="pokemon-data" key={pokemon.id}>
            <h2 className="pokemon-name">{pokemon.name}</h2>
            <div className="pokemon-types">
                {types.map(type => 
                    <p key={type} className="pokemon-type">
                      {type}  
                    </p>
                    )}
            </div>
        </div>

        <div>
            <img className="pokemon-img" loading="lazy" src={image}></img>
        </div>
    </Link>

)}