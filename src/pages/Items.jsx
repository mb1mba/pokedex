import React, {useContext, useState, useEffect} from "react";
import { ItemsContext } from "../context/ItemsContext";
import { PokemonSearchContext } from "../context/PokemonSearchContext";
import Item from "../components/Item";
function Items(){
    const { items } = useContext(ItemsContext)
    const { searchState } = useContext(PokemonSearchContext);
    const [displayedMoves, setDisplayedMoves] = useState([])

    useEffect(() => {
        const filteredResults = searchState ? items.filter(move =>
            move.name.toLowerCase().includes(searchState.value.toLowerCase())
        ) : items;
        setDisplayedMoves(filteredResults);
    }, [searchState, items]);

    return(
        <> 
          {displayedMoves.map(item => <Item item={item}/>)}
        </>
    )
}

export default React.memo(Items)  