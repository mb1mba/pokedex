import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { getPokemonEvolution } from "../../api";
import EvolutionChain from "../../components/EvolutionChain";

function Evolution(){
    const {id} = useParams()
    const [pokemonEvolution, setPokemonEvolution] = useState("")

    useEffect(()=>{
        async function loadPokemonEvolutions(){
            try{
                const res = await getPokemonEvolution(id)
                const evolutionData = await res.json()
                setPokemonEvolution(evolutionData)
            } catch(err){
                console.log(err)
            }
        }
        loadPokemonEvolutions()
    }, [])    

    console.log(pokemonEvolution)
    
    return (
        <div className="datas-container">
            {pokemonEvolution && <EvolutionChain chain={pokemonEvolution} />}
        </div>
    )
}

export default Evolution