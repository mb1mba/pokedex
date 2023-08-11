import React from "react";
import { Link } from "react-router-dom";

export default function Pokemon({currentPokemon, image, pokemonSpecies, types, hasNextPokemon, hasPreviousPokemon}){
    return (
        <div className="pokemon-detail-container" key={currentPokemon.id}>
                <Link to="/pokemons"> &larr;</Link>
                <div className="header-detail">
                    <div className="header-txt">
                        <div className="pokemon-name-id-container">
                            <h1>{currentPokemon.name}</h1>
                            <p className="pokemon-id">{`#00${currentPokemon.id}`}</p>
                        </div>

                        <div className="pokemon-species-type-container">
                            <div className="pokemon-type-container">
                                {types.map(type => 
                                    <p className="pokemon-type">
                                        {type}  
                                    </p>
                                )}
                            </div>
                            <p className="pokemon-species">{pokemonSpecies}</p>
                        </div>

                        <div className="pokemon-img-container">
                            <img className="pokemon-img-data" src={image}></img>
                            <img className="pokeball-an" src={"../../pokeball.png"}></img>
                            {hasNextPokemon && <Link to={`/pokemons/${currentPokemon.id + 1}`} className="next-pokemon">Next</Link>}
                            {hasPreviousPokemon && <Link to={`/pokemons/${currentPokemon.id - 1}`} className="prev-pokemon">Prev</Link>}
                        </div>
                    </div>
                </div>
            </div>
    )
}