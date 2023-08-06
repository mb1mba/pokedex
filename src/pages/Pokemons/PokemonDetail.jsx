import React, {useState, useEffect} from "react";
import { Outlet, useParams, NavLink } from "react-router-dom";
import { getPokemon } from "../../api";
import setBodyColor from "../../setBodyColor";
import Stats from "./Stats";

function PokemonDetail(){
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        async function loadPokemon(){
            setLoading(true)
            try {
                const data = await getPokemon(id)
                setPokemon(data)

            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadPokemon()
    }, [])

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

    console.log(pokemon && pokemon)

    const types = pokemon && pokemon.types.map(obj => obj.type.name)
    const image = pokemon && pokemon["sprites"].other["official-artwork"]["front_default"]

    return (pokemon &&  
        
        <div className="pokemon-detail-container" key={pokemon.id}>
            <div className="header-detail">
                <h1>{pokemon.name}</h1>
                <p>{pokemon.id}</p>
                <div className="pokemon-type-container">
                    {types.map(type => 
                        <p className="pokemon-type">
                            {type}  
                        </p>
                    )}
                </div>
                <div className="pokemon-img-container">
                    <img className="pokemon-img-data" src={image}></img>
                </div>
            </div>

            <div className="data-container">
                <nav className="nav-link-container">
                    <NavLink  to="" end className={({isActive}) => isActive ? "active-link" : null}>About</NavLink>
                    <NavLink to="stats" className={({isActive}) => isActive ? "active-link" : null}>Base Stats</NavLink>
                    <NavLink to="evolution " className={({isActive}) => isActive ? "active-link" : null}>Evolution</NavLink>
                    <NavLink to="pokemonMove" className={({isActive}) => isActive ? "active-link" : null}>Moves</NavLink>
                </nav>
                <Outlet context={pokemon}/>
            </div>
        </div>

        
    )
}

export default PokemonDetail