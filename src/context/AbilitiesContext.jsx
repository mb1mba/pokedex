import React, { createContext } from "react";
import { getAbilities, getAbilitiesData } from "../api";
import { useContextProvider } from "../utils/contextUtils";

const AbilitiesContext = createContext();

function AbilitiesProvider({ children }) {

  const { data, loading } = useContextProvider(getAbilitiesData, getAbilities)
  
  if(loading){
    return (
      <div className="wrapper">
          <div className="pokeball">
          </div>
      </div>)
  }
  
  return (
    <AbilitiesContext.Provider value={{ data }}>
      {children}
    </AbilitiesContext.Provider>
  );
}

export { AbilitiesContext, AbilitiesProvider };
