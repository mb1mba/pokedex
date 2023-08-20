
import React, { useContext, useState, useEffect } from "react";
import { PokemonSearchContext } from "../context/PokemonSearchContext";
import { useSearchParams, useLocation } from "react-router-dom";
import { filterMovesByType } from "../utils/filterMovesByType";
import { filterPokemonByType } from "../utils/FilterPokemonByType";

function GenericList({ context, DisplayComponent }) {
  const {pathname} = useLocation()
  const { data } = useContext(context);
  const { searchState } = useContext(PokemonSearchContext);
  const [displayedData, setDisplayedData] = useState(data);
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")
   
  useEffect(() => {
    const filteredResults = searchState
      ? data.filter(item =>
          item.name.toLowerCase().includes(searchState.value.toLowerCase())
        )
      : data;

    const filteredType = pathname.includes("/moves") ? 
      filterMovesByType(filteredResults, typeFilter) : 
      filterPokemonByType(filteredResults, typeFilter);
      
    setDisplayedData(filteredType)
  }, [searchState, typeFilter, data]);
  
  return (
    <>
      {displayedData.map(element => (
        <DisplayComponent key={element.name} element={element} />
      ))}
    </>
  );
}

export default GenericList
