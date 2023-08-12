import React, { useEffect, useState,useContext } from "react";
import setBodyColor from "../setBodyColor";
import { PokemonContext } from "../context/PokemonDataContext";
import Pokemons from "../components/Pokemons";
import { PokemonSearchContext } from "../context/PokemonSearchContext";

function Pokedex(){

    const { searchState } = useContext(PokemonSearchContext);
    const { pokemonsData } = useContext(PokemonContext);
    const [displayedPokemon, setDisplayedPokemon] = useState(pokemonsData); 
    setBodyColor({color:" #fff"})

    useEffect(() => {
        const filteredResults = searchState ? pokemonsData.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchState.value.toLowerCase())
        ) : pokemonsData;
        setDisplayedPokemon(filteredResults);
    }, [searchState, pokemonsData]);
    
    const pokedex = displayedPokemon.map(pokemon =>
        <div data-aos="fade-up">
            <Pokemons 
                pokemon={pokemon}
                key={pokemon.id}
            />
        </div>
    );

    return( 
            <div className="pokedex-container">
                {pokedex}
            </div>
        )
        
}

export default Pokedex