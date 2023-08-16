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

    return (
        <div className="datas-container">
            Evolutions goes here
        </div>
    )
}

export default Evolution