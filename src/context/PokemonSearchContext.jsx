import React, { createContext, useContext, useState } from 'react';

const PokemonSearchContext = createContext();

function PokemonSearchProvider({ children }) {
  const [searchState, setSearchState] = useState(null);

  return (
    <PokemonSearchContext.Provider value={{ searchState, setSearchState }}>
      {children}
    </PokemonSearchContext.Provider>
  );
}

export {PokemonSearchContext, PokemonSearchProvider}