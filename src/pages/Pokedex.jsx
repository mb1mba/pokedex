import React from "react";
import { getDatas, getPokemons } from "../api";
import { Link } from "react-router-dom";

function Pokedex(){
    const [pokemonsUrl, setPokemonsUrl] = React.useState([])
    const [pokemonsData, setPokemonsData] = React.useState([])
    const [loading, setLoading] = React.useState(null)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function getPokemonsData(){
            setLoading(true)
            try{
                const data = await getDatas()
                setPokemonsUrl(data)
            } catch (err){
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        getPokemonsData()
    }, [])

    React.useEffect(() => {
        async function loadPokedex(){
            setLoading(true)
            try{
                const data = await Promise.all(pokemonsUrl.map(pokemonUrl => getPokemons(pokemonUrl.url)));
                setPokemonsData(data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadPokedex();
    }, [pokemonsUrl]);

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
    
    const pokemonsElement = pokemonsData.map(pokemon =>{
        const types = pokemon.types.map(obj => obj.type.name)
        const styles = types[0]
        const image = pokemon.sprites && pokemon.sprites.other["official-artwork"]["front_default"]
        return (
        <Link to={`${pokemon.id}`} className={`pokemon-container ${styles}`} key={pokemon.id}>
            <div className="pokemon-data">
                <h2 className="pokemon-name">{pokemon.name}</h2>
                <div className="pokemon-types">
                    {types.map(type => 
                        <p className="pokemon-type">
                          {type}  
                        </p>
                        )}
                </div>
            </div>
            <div>
                <img className="pokemon-img" src={image}></img>
            </div>
        </Link>
        )}
    )

    return( 
        <div className="pokedex-container">
            {pokemonsElement}
        </div>
        )

        
}

export default Pokedex