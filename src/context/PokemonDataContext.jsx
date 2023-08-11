import React, {useState, useEffect, createContext}from "react";
import { getDatas, getPokemons, getPokemonsDescription } from "../api";
const PokemonContext = createContext()
    
function PokemmonDataContext({children}){

    const [pokemonsUrl, setPokemonsUrl] = useState([])
    const [pokemonsData, setPokemonsData] = useState([])
    const [pokemonDescription, setPokemonDescription] = useState(null)
    const [pokemonEvolution, setPokemonEvolution] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        async function getPokemonsData(){
            try{
                const data = await getDatas()
                setPokemonsUrl(data)
            } catch (err){
                console.log(err)
            }
    }
        getPokemonsData()
    }, [])
  
  useEffect(() => {
    async function loadPokedex(){
        try{
            setLoading(false)
            const data = await Promise.all(pokemonsUrl.map(pokemonUrl => getPokemons(pokemonUrl.url)));
            setPokemonsData(data)
        } catch(err) {
            console.log(err)
        } finally{
            setLoading(false)
        }
    }
        loadPokedex();
    }, [pokemonsUrl]);
  
    return (
        <PokemonContext.Provider value={{pokemonsData, pokemonDescription, loading}}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemmonDataContext
export { PokemonContext }