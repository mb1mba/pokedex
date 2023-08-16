import React, { createContext, useState, useEffect } from "react";
import { getPokemons, getDatas } from "../api";
const PokedexContext = createContext();

function PokedexProvider({ children }) {

  const [pokemonsData, setPokemonsData] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      try {
        const pokemonUrls = await getDatas();
        const pokemonData = await Promise.all(pokemonUrls.map(pokemonUrl => getPokemons(pokemonUrl.url)));
        setPokemonsData(pokemonData);
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
    <PokedexContext.Provider value={{ pokemonsData }}>
      {children}
    </PokedexContext.Provider>
  );
}

export { PokedexContext, PokedexProvider };
