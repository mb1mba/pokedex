import React, {useState, useContext} from "react";
import { useParams } from "react-router-dom";
import setBodyColor from "../../setBodyColor";
import { PokedexContext } from "../../context/PokedexContext";
import Pokemon from "../../components/Pokemon";
import Navbar from "../../components/Navbar";

function PokemonDetail(){
    const {pokemonsData} = useContext(PokedexContext)

    const {id} = useParams()
    const currentPokemon = pokemonsData[id - 1]

    const nextPokemonId = currentPokemon && currentPokemon.id + 1;
    const hasNextPokemon = nextPokemonId <= 150;
    const nextPokemon = hasNextPokemon ? pokemonsData[currentPokemon?.id] : null

    const prevPokemonId = currentPokemon?.id - 1
    const hasPreviousPokemon = prevPokemonId >= 1
    const previousPokemon = hasPreviousPokemon ? pokemonsData[currentPokemon?.id-2] : null
    
    const [pokemonSpecies, setPokemonSpecies] = useState(null)

    const types = currentPokemon && currentPokemon.types.map(typeObj => typeObj.type.name)
    const image = currentPokemon && currentPokemon.sprites?.other?.["official-artwork"]?.front_default
    const nextPokemonImage = nextPokemon && nextPokemon.sprites?.other?.["official-artwork"]?.front_default
    const prevPokemonImage = previousPokemon && previousPokemon.sprites?.other?.["official-artwork"]?.front_default
    
    const bgColor = () => {
        const typeColors = {
          grass: "#78c850",
          water: "#6890f0",
          poison: "#a040a0",
          normal: "#a8a878",
          fire: "#f08030",
          bug: "#a8b820",
          psychic: "#be95c4",
          fighting: "#c03028",
          ground: "#e0c068",
          electric: "#e7e700",
          rock: "#b8a038",
          fairy: "#ffaaff",
          ghost: "#705898"
        };
      
        return types && types[0] ? typeColors[types[0]] : "";
    };

    setBodyColor({color: bgColor()})

    return (currentPokemon &&  
        <>
            <Pokemon 
                currentPokemon={currentPokemon}
                image={image}
                types={types}
                hasNextPokemon={hasNextPokemon}
                hasPreviousPokemon={hasPreviousPokemon}
                nextPokemonImage={nextPokemonImage}
                prevPokemonImage={prevPokemonImage}
                pokemonsData={pokemonsData}
            />

            <Navbar 
                currentPokemon={currentPokemon}
            />
        </>
    )
}

export default PokemonDetail