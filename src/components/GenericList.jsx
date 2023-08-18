
import React, { useContext, useState, useEffect } from "react";
import { PokemonSearchContext } from "../context/PokemonSearchContext";

function GenericList({ context, DisplayComponent }) {

  const { data } = useContext(context);
  const { searchState } = useContext(PokemonSearchContext);
  const [displayedData, setDisplayedData] = useState(data);

  useEffect(() => {
    const filteredResults = searchState
      ? data.filter(item =>
          item.name.toLowerCase().includes(searchState.value.toLowerCase())
        )
      : data;
    setDisplayedData(filteredResults);
  }, [searchState, data]);

  return (
    <div data-aos="fade-up">
      {displayedData.map(element => (
        <DisplayComponent key={element.name} element={element} />
      ))}
    </div>
  );
}

export default GenericList
