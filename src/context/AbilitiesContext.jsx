import React, { createContext } from "react";
import { getAbilities, getAbilitiesData } from "../api";
import { useContextProvider } from "../utils/contextUtils";

const AbilitiesContext = createContext();

function AbilitiesProvider({ children }) {

  const { data: abilities  } = useContextProvider(
    getAbilitiesData,
    ability => getAbilities(ability.url)
  );

  return (
    <AbilitiesContext.Provider value={{ abilities }}>
      {children}
    </AbilitiesContext.Provider>
  );
}

export { AbilitiesContext, AbilitiesProvider };
