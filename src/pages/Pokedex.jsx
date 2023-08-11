import React from "react";
import setBodyColor from "../setBodyColor";
import { PokemonContext } from "../context/PokemonDataContext";
import Pokemons from "../components/Pokemons";

function Pokedex(){
    const { pokemonsData } = React.useContext(PokemonContext)
    const [loading, setLoading] = React.useState(null)
    const [error, setError] = React.useState(null)
    
    setBodyColor({color:" #fff"})
    
    const pokedex = pokemonsData.map(pokemon =>
        <Pokemons 
            pokemon={pokemon}
            key={pokemon.id}
        />
    );

    return( 
        <div className="pokedex-container">
            {pokedex}
        </div>
        )
        
}

export default Pokedex