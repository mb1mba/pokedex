import React, {useEffect, useState} from "react";
import { PokemonContext } from "../../context/PokemonDataContext";
import { useOutletContext, useParams} from "react-router-dom";
import { getPokemonMoves } from "../../api";


function PokemonMove(){
    const currentPokemon = useOutletContext()
    const [pokemonMoves, setPokemonMoves] = useState([])
    
    useEffect(() => {
        async function loadPokemonMoves(){
            try{
                const urls = currentPokemon.moves.map(move => move.move.url)
                console.log(urls)
                const data = await Promise.all(urls.map(url => getPokemonMoves(url)))
                setPokemonMoves(data)
            } catch(err) {
                console.log(err)
            }
        }
        loadPokemonMoves()
    }, [currentPokemon.id])

    

    return (
        <div className="moves">
          {pokemonMoves.map(move => 
          <div className={`pokemon-moves-details ${move.type.name}`}>
             <p className="pokemon-move">{move.name}</p>
             <div className="pokemon-move-characteristic">
                <p>{move.accuracy}</p>
                <p>{move.power}</p>
             </div>
             <img src={`../../${move.type.name}.svg`} className={`logo-type ${move.type.name}`}></img>
          </div>

            )}
        </div>
    )
}

export default PokemonMove