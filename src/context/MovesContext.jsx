import React, { createContext, useState, useEffect } from "react";
import { getMoves, getMovesData } from "../api";

const MovesContext = createContext();

function MovesProvider({ children }) {
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const moveData = await getMovesData();
        const moveUrls = moveData.map(move => move.url);
        const moves = await Promise.all(moveUrls.map(moveUrl => getMoves(moveUrl)));
        setMoves(moves);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <MovesContext.Provider value={{ moves }}>
      {children}
    </MovesContext.Provider>
  );
}

export { MovesContext, MovesProvider };
