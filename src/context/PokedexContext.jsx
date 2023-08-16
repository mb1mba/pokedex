import React, { createContext } from "react";
import { getPokemons, getDatas } from "../api";
import { useContextProvider } from "../utils/contextUtils";

const PokedexContext = createContext();

function PokedexProvider({ children }) {

  const { data, loading } = useContextProvider(getDatas, getPokemons)

  if(loading){
    return (
      <div className="wrapper">
          <div className="pokeball">
          </div>
      </div>)
  }
  
  return (
    <PokedexContext.Provider value={{ data }}>
      {children}
    </PokedexContext.Provider>
  );
}

export { PokedexContext, PokedexProvider };
