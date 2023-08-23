import React from "react";
import EvolutionCard from "../EvolutionCard";
import './EvolutionChain.css'
function EvolutionChain({ chain }) {
  const renderEvolutionChain = () => {
    const stack = [chain.chain];
    const renderedChain = [];

    while (stack.length > 0) {
      const current = stack.pop();
      const species = current?.species
      const evolves_to = current?.evolves_to
      const evolution_details = current?.evolution_details
      const minLevel = evolution_details?.[0]?.min_level;
      const item = evolution_details?.[0]?.item?.name
      const id = species?.url.split("/").slice(-2, -1)[0];
      if (id > 150) {
        continue; 
      }
      
      const evolutionData = {
        species,
        minLevel,
      };
      
      const triggerEvolution = minLevel ? (
        <p>LVL {minLevel}</p>
      ) : (
        <p>{item}</p>
      );

      renderedChain.push(
        <div className="pokemon-chain-item" key={species?.name}>
          <div className="level-container">
            {item !== undefined && <img src="/arrow-right.svg" />}
            <p>{triggerEvolution}</p>
          </div>
    
          <EvolutionCard data={evolutionData} />
          <div className="evolution-chain">
            {evolves_to && evolves_to.length > 0 && evolves_to.forEach((evolution) => {
              stack.push(evolution);
            })}
          </div>
        </div>
      );
    }

    const evolution = renderedChain.length === 1 ?
    <h2>This pokemon have no evolution</h2> : 
    renderedChain

    return evolution
  };

  return <div className="pokemon-evolution-chain">{renderEvolutionChain()}</div>;
}

export default EvolutionChain;