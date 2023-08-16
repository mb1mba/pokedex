import React, { createContext } from "react";
import { getPokemons, getDatas } from "../api";
import { useContextProvider } from "../utils/contextUtils";

const PokedexContext = createContext();

function PokedexProvider({ children }) {

  const { data } = useContextProvider(getDatas, getPokemons)

  return (
    <PokedexContext.Provider value={{ data }}>
      {children}
    </PokedexContext.Provider>
  );
}

export { PokedexContext, PokedexProvider };
