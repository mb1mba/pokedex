import React, {useState, useContext} from "react";
import { useParams } from "react-router-dom";
import setBodyColor from "../../utils/setBodyColor";
import { PokedexContext } from "../../context/PokedexContext";
import Pokemon from "../../components/Pokemon/Pokemon";
import Navbar from "../../components/Navbar/Navbar";
import { getImageURL } from "../../utils/getImageUrl"

function PokemonDetail(){

    const { data } = useContext(PokedexContext)
    const {id} = useParams()
    const currentPokemon = data[id - 1]

    const nextPokemonId = currentPokemon && currentPokemon.id + 1;
    const hasNextPokemon = nextPokemonId <= 600;
    const nextPokemon = hasNextPokemon ? data[currentPokemon?.id] : null

    const prevPokemonId = currentPokemon?.id - 1
    const hasPreviousPokemon = prevPokemonId >= 1
    const previousPokemon = hasPreviousPokemon ? data[currentPokemon?.id-2] : null
    
    const [pokemonSpecies, setPokemonSpecies] = useState(null)

    const types = currentPokemon && currentPokemon.types.map(typeObj => typeObj.type.name)
    const image = currentPokemon && getImageURL(currentPokemon.id)
    const nextPokemonImage = nextPokemon && getImageURL(nextPokemonId)
    const prevPokemonImage = previousPokemon && getImageURL(prevPokemonId)
    
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
          fairy: "#ef70ef",
          ghost: "#705898",
          ice: "#3fd8ff",
          dragon: "#7038f8",
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
                data={data}
            />

            <Navbar 
                currentPokemon={currentPokemon}
            />
        </>
    )
}

export default PokemonDetail
