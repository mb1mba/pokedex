import React, {useEffect, useState} from "react";
import { PokemonContext } from "../../context/PokemonDataContext";
import { useOutletContext, useParams} from "react-router-dom";
import { getPokemonMoves } from "../../api";


function PokemonMove(){
    const currentPokemon = useOutletContext()
    const [pokemonMoves, setPokemonMoves] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        async function loadPokemonMoves(){
            try{
                const urls = currentPokemon.moves.map(move => move.move.url)
                console.log(urls)
                const data = await Promise.all(urls.map(url => getPokemonMoves(url)))
                setPokemonMoves(data)
            } catch(err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        loadPokemonMoves()
    }, [currentPokemon.id])
    if (loading) {
        return (
            <div className="wrapper">
                <div className="pokeball">
                </div>
            </div>)
    }

    return (
        <div className="datas-container">
            <div className="moves">
            {pokemonMoves.map(move =>
            <div data-aos="fade-up"> 
            <div className={`pokemon-moves-details ${move.type.name}`}>
                <div className="move-desc">
                    <p className="pokemon-move">{move.name}</p>
                </div>
                <div className="pokemon-move-characteristic">
                    <p className="move-description">{move?.["flavor_text_entries"][0]?.["flavor_text"]}</p>
                    <div className="move-stats">
                        <p className="move-accuracy">{move.accuracy ? move.accuracy : "-"}</p>
                        <p className="move-power">{move.power ? move.power : "-"}</p>
                    </div>
                    <img src={`../../${move.type.name}.svg`} className={`logo-type ${move.type.name}`}></img>
                </div>  
            </div>
            <hr/>
            </div>
                )}
            </div>
        </div>
    )
}

export default PokemonMove