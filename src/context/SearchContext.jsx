import React, { createContext, useState } from 'react';

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [searchState, setSearchState] = useState(null);

  return (
    <SearchContext.Provider value={{ searchState, setSearchState }}>
      {children}
    </SearchContext.Provider>
  );
}

export {SearchContext, SearchProvider}