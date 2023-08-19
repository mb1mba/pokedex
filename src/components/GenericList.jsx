
import React, { useContext, useState, useEffect } from "react";
import { PokemonSearchContext } from "../context/PokemonSearchContext";
import { useSearchParams } from "react-router-dom";

function GenericList({ context, DisplayComponent }) {

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
    setDisplayedData(filteredResults);
  }, [searchState, data]);
  
  useEffect(() =>{
    const filteredType = typeFilter ? 
    data.filter(item => item.types?.map(type => type.type.name).includes(typeFilter)) :
    data;
    setDisplayedData(filteredType)
  }, [typeFilter,data])

  console.log(data)

  return (
    <div data-aos="fade-up">
      {displayedData.map(element => (
        <DisplayComponent key={element.name} element={element} />
      ))}
    </div>
  );
}

export default GenericList
