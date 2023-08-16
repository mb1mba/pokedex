import React, { createContext } from "react";
import { getItems, getItemsData } from "../api";
import { useContextProvider } from "../utils/contextUtils";

const ItemsContext = createContext();

function ItemsProvider({ children }) {
  const { data, loading } = useContextProvider(getItemsData, getItems)
 
  if(loading){
    return (
      <div className="wrapper">
          <div className="pokeball">
          </div>
      </div>)
  }
  
  return (
    <ItemsContext.Provider value={{ data }}>
      {children}
    </ItemsContext.Provider>
  );
}

export { ItemsContext, ItemsProvider };
