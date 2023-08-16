import React, { createContext } from "react";
import { getItems, getItemsData } from "../api";
import { useContextProvider } from "../utils/contextUtils";

const ItemsContext = createContext();

function ItemsProvider({ children }) {
  const { data } = useContextProvider(getItemsData, getItems)

  return (
    <ItemsContext.Provider value={{ data }}>
      {children}
    </ItemsContext.Provider>
  );
}

export { ItemsContext, ItemsProvider };
