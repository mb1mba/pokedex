import React, {useState, useEffect, useContext} from "react";
import { Outlet, useParams, NavLink, Link, useLocation } from "react-router-dom";
import { getPokemon, getPokemonsDescription, } from "../../api";
import setBodyColor from "../../setBodyColor";
import { PokemonContext } from "../../context/PokemonDataContext";

function PokemonDetail(){
    const {pokemonsData} = useContext(PokemonContext)
    const {id} = useParams()
    const currentPokemon = pokemonsData[id - 1]
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [pokemonSpecies, setPokemonSpecies] = useState(null)
    const nextPokemonId = currentPokemon && currentPokemon.id + 1;
    const hasNextPokemon = nextPokemonId <= 150;
    const prevPokemonId = currentPokemon?.id - 1
    const hasPreviousPokemon = prevPokemonId >= 1
    const types = currentPokemon && currentPokemon.types.map(typeObj => typeObj.type.name)
    const image = currentPokemon && currentPokemon.sprites?.other?.["official-artwork"]?.front_default
    console.log(currentPokemon)
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

    if (loading) {
        return (
            <div className="wrapper">
                <div className="pokeball">
                </div>
            </div>)
    }

    if(error || !currentPokemon){
        return <h1>Error</h1>
    }

    return (currentPokemon &&  
        <>
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
                        <img className="pokeball-an" src={"../public/pokeball.png"}></img>
                        {hasNextPokemon && <Link to={`/pokemons/${currentPokemon.id + 1}`} className="next-pokemon">Next</Link>}
                        {hasPreviousPokemon && <Link to={`/pokemons/${currentPokemon.id - 1}`} className="prev-pokemon">Prev</Link>}
                    </div>
                    </div>
                </div>
            </div>

            <div className={`data-container`}>
                <nav className="nav-link-container">
                    <NavLink to="" end className={({isActive}) => isActive ? "active-link" : null}>About</NavLink>
                    <NavLink to="stats" className={({isActive}) => isActive ? "active-link" : null}>Base Stats</NavLink>
                    <NavLink to="evolution " className={({isActive}) => isActive ? "active-link" : null}>Evolution</NavLink>
                    <NavLink to="pokemonMove" className={({isActive}) => isActive ? "active-link" : null}>Moves</NavLink>
                </nav>
                <Outlet context={currentPokemon}/>
            </div>
        </>
    )
}

export default PokemonDetail