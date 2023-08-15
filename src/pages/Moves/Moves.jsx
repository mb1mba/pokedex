import React, {useContext, useState, useEffect} from "react";
import Move from "../../components/Move";
import { MovesContext } from "../../context/MovesContext";
import { PokemonSearchContext } from "../../context/PokemonSearchContext";
function Moves(){
    const { moves } = useContext(MovesContext)
    const { searchState } = useContext(PokemonSearchContext);
    const [displayedMoves, setDisplayedMoves] = useState([])

    useEffect(() => {
        const filteredResults = searchState ? moves.filter(move =>
            move.name.toLowerCase().includes(searchState.value.toLowerCase())
        ) : moves;
        setDisplayedMoves(filteredResults);
    }, [searchState, moves]);

    return(
        <> 
          {displayedMoves.map(move => <Move move={move}/>)}
        </>
    )
}

export default React.memo(Moves)  