import React, {useState, useEffect, createContext}from "react";
import { getDatas, getPokemons, getPokemonsDescription } from "../api";
import { useParams } from "react-router-dom";
const PokemonContext = createContext()
    
function PokemmonDataContext({children}){

    const [pokemonsUrl, setPokemonsUrl] = useState([])
    const [pokemonsData, setPokemonsData] = useState([])
    const [pokemonDescription, setPokemonDescription] = React.useState(null)
    
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
            const data = await Promise.all(pokemonsUrl.map(pokemonUrl => getPokemons(pokemonUrl.url)));
            setPokemonsData(data)
        } catch(err) {
            console.log(err)
        }
    }
        loadPokedex();
    }, [pokemonsUrl]);
  
    return (
        <PokemonContext.Provider value={{pokemonsData, pokemonDescription}}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemmonDataContext
export { PokemonContext }