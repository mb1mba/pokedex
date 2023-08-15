import React, {useEffect, useState} from "react";
import { useOutletContext } from "react-router-dom";
import { getPokemonMoves } from "../../api";
import Move from "../../components/Move";
function PokemonMove(){
    const currentPokemon = useOutletContext()
    const [pokemonMoves, setPokemonMoves] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        async function loadPokemonMoves(){
            try{
                const urls = currentPokemon.moves.map(move => move.move.url)
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
                <Move 
                    type={move.type.name}
                    name={move.name}
                    description={move?.["flavor_text_entries"][0]?.["flavor_text"]}
                    accuracy={move.accuracy}
                    power={move.power}
                />
                )}
            </div>
        </div>
    )
}

export default PokemonMove

