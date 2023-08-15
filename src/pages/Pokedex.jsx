import React, { useEffect, useState,useContext } from "react";
import setBodyColor from "../setBodyColor";
import Pokemons from "../components/Pokemons";
import { PokemonSearchContext } from "../context/PokemonSearchContext";
import { PokedexContext } from "../context/PokedexContext";

function Pokedex(){

    const { searchState } = useContext(PokemonSearchContext);
    const { pokemonsData } = useContext(PokedexContext);
    
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

export default React.memo(Pokedex)