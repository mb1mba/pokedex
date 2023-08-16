import React, { createContext, useState, useEffect } from "react";
import { getMoves, getMovesData } from "../api";

const MovesContext = createContext();

function MovesProvider({ children }) {
  const [moves, setMoves] = useState([]);
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      try {
        const moveData = await getMovesData();
        const moveUrls = moveData.map(move => move.url);
        const moves = await Promise.all(moveUrls.map(moveUrl => getMoves(moveUrl)));
        setMoves(moves);
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
    <MovesContext.Provider value={{ moves }}>
      {children}
    </MovesContext.Provider>
  );
}

export { MovesContext, MovesProvider };
