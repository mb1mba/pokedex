import React, {useState, useEffect} from "react";
import { Outlet, useParams, NavLink, Link, useLocation } from "react-router-dom";
import { getPokemon, getPokemonsDescription } from "../../api";
import setBodyColor from "../../setBodyColor";
import Stats from "./Stats";

function PokemonDetail(){
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [pokemon, setPokemon] = useState(null)
    const [pokemonSpecies, setPokemonSpecies] = useState(null)
    const location = useLocation()
    console.log(location)

    useEffect(() => {
        async function loadPokemon(){
            setLoading(true)
            try {
                const data = await getPokemon(id)
                const desc = await getPokemonsDescription(id)
                setPokemon(data)
                setPokemonSpecies(desc.genera[7].genus)

            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadPokemon()
    }, [location.pathname])

    if (loading) {
        return (
            <div className="wrapper">
                <div className="pokeball">
                </div>
            </div>)
    }

    if(error){
        return <h1>Error</h1>
    }

    const types = pokemon && pokemon.types.map(obj => obj.type.name)
    const image = pokemon && pokemon["sprites"].other["official-artwork"]["front_default"]

    return (pokemon &&  
        <>
            <div className="pokemon-detail-container" key={pokemon.id}>
                <Link to="/pokemons"> &larr;</Link>
                <div className="header-detail">
                    <div className="header-txt">
                        <div className="pokemon-name-id-container">
                            <h1>{pokemon.name}</h1>
                            <p className="pokemon-id">{`#00${pokemon.id}`}</p>
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
                        <Link to={`/pokemons/${pokemon.id + 1}`} className="next-pokemon">A</Link>
                    </div>
                    </div>
                </div>
            </div>

            <div className="data-container">
                <nav className="nav-link-container">
                    <NavLink to="" end className={({isActive}) => isActive ? "active-link" : null}>About</NavLink>
                    <NavLink to="stats" className={({isActive}) => isActive ? "active-link" : null}>Base Stats</NavLink>
                    <NavLink to="evolution " className={({isActive}) => isActive ? "active-link" : null}>Evolution</NavLink>
                    <NavLink to="pokemonMove" className={({isActive}) => isActive ? "active-link" : null}>Moves</NavLink>
                </nav>
                <Outlet context={pokemon}/>
            </div>
        </>
    )
}

export default PokemonDetail