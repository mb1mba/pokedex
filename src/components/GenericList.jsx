import filterMovesByType from "../utils/filterMovesByType"
import filterPokemonByType from "../utils/filterPokemonByType"
import React, { useContext, useState, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { useSearchParams, useLocation } from "react-router-dom";


function GenericList({ context, DisplayComponent }) {
  const {pathname} = useLocation()
  const { data } = useContext(context);
  const { searchState } = useContext(SearchContext);
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
