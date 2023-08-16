import React, { createContext, useState, useEffect } from "react";
import { getMoves, getMovesData } from "../api";
import { useContextProvider } from "../utils/contextUtils";

const MovesContext = createContext();

function MovesProvider({ children }) {

  const { data, loading } = useContextProvider(getMovesData, getMoves)

  
  if(loading){
    return (
      <div className="wrapper">
          <div className="pokeball">
          </div>
      </div>)
  }

  return (
    <MovesContext.Provider value={{ data }}>
      {children}
    </MovesContext.Provider>
  );
}

export { MovesContext, MovesProvider };
