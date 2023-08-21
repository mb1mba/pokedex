import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getPokemonEvolution } from "../../api";
import EvolutionChain from "../../components/Evolution/EvolutionChain/EvolutionChain"

function Evolution() {
  const { id } = useParams();
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      try{
        const res = await getPokemonEvolution(id);
        const value = await res.json();
        setEvolutionChain(value);
      } catch(err){
        console.log(err)
      } finally{
        setLoading(false)
      }
    }
    fetchData();
  }, [id]);
  
  if(loading){
    return (
      <div className="wrapper">
          <div className="pokeball">
          </div>
      </div>)
  }
  return (
    <>
          <h2>Evolution Chain</h2>
          <EvolutionChain chain={evolutionChain} />
    </>
  );
}

export default Evolution