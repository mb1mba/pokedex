import React, { createContext } from "react";
import { getAbilities, getAbilitiesData } from "../api";
import { useContextProvider } from "../utils/contextUtils";

const AbilitiesContext = createContext();

function AbilitiesProvider({ children }) {

  const { data } = useContextProvider(getAbilitiesData, getAbilities)

  return (
    <AbilitiesContext.Provider value={{ data }}>
      {children}
    </AbilitiesContext.Provider>
  );
}

export { AbilitiesContext, AbilitiesProvider };
