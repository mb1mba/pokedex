import React, { createContext, useState, useEffect } from "react";
import { getItems, getItemsData } from "../api";

const ItemsContext = createContext();

function ItemsProvider({ children }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      try {
        const itemsData = await getItemsData();
        const itemsUrl = itemsData.map(item => item.url);
        const items = await Promise.all(itemsUrl.map(itemsUrl => getItems(itemsUrl)));
        setItems(items);
      } catch (err) {
        console.log(err);
      } finally{
        setLoading(false)
      }
    }
    fetchData();
  }, []);

  if(loading){
    return (
      <div className="wrapper">
          <div className="pokeball">
          </div>
      </div>)
  }
  return (
    <ItemsContext.Provider value={{ items }}>
      {children}
    </ItemsContext.Provider>
  );
}

export { ItemsContext, ItemsProvider };
