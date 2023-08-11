import React, {useState, useContext} from "react";
import { useParams } from "react-router-dom";
import setBodyColor from "../../setBodyColor";
import { PokemonContext } from "../../context/PokemonDataContext";
import Pokemon from "../../components/Pokemon";
import Navbar from "../../components/Navbar";

function PokemonDetail(){
    const {pokemonsData} = useContext(PokemonContext)
    const {id} = useParams()
    const currentPokemon = pokemonsData[id - 1]
    const nextPokemon = pokemonsData[currentPokemon?.id]
    const previousPokemon = pokemonsData[currentPokemon?.id-2]
    const [loading, setLoading] = useState(false)
    const [pokemonSpecies, setPokemonSpecies] = useState(null)
    const nextPokemonId = currentPokemon && currentPokemon.id + 1;
    const hasNextPokemon = nextPokemonId <= 150;
    const prevPokemonId = currentPokemon?.id - 1
    const hasPreviousPokemon = prevPokemonId >= 1
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
          fairy: "#ffaaff"
        };
      
        return types && types[0] ? typeColors[types[0]] : "";
    };

    setBodyColor({color: bgColor()})
    console.log(nextPokemonImage)
    if (loading) {
        return (
            <div className="wrapper">
                <div className="pokeball">
                </div>
            </div>)
    }

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
            />
            <Navbar 
                currentPokemon={currentPokemon}
            />
        </>
    )
}

export default PokemonDetail