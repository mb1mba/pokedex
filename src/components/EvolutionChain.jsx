import React from "react";
import { useParams } from "react-router";

function EvolutionChain({pokemonEvolution }) {
 
  const loadEvolutionImages = async (evolutionData) => {
    if (!evolutionData) {
      return;
    }

    const speciesName = evolutionData.species?.name;
    const evolvesTo = evolutionData.evolves_to;

    if (speciesName && !pokemonImages[speciesName]) {
      try {
        const { sprites } = await getPokemons(
          `https://pokeapi.co/api/v2/pokemon/${speciesName}`
        );

        setPokemonImages((prevState) => ({
          ...prevState,
          [speciesName]: sprites.front_default
        }));
        
      } catch (err) {
        console.log(err);
      }
    }

    if (evolvesTo && evolvesTo.length > 0) {
      evolvesTo.forEach((evolvesToData) => {
        loadEvolutionImages(evolvesToData);
      });
    }
  };

  const renderEvolutionChain = (evolutionData) => {
    if (!evolutionData) {
      return null;
    }

    const speciesName = evolutionData.species?.name;
    const evolvesTo = evolutionData.evolves_to;

    return (
      <div key={speciesName} className="evolution-chain-container">
        <p>{speciesName}</p>
        <img src={pokemonImages[speciesName]} alt={speciesName} />
        <div className="evolution-chain-container">
          {evolvesTo &&
            evolvesTo.length > 0 &&
            evolvesTo.map((evolvesToData) => (
              <div key={evolvesToData.species.name} className="evolution-container">
                {renderEvolutionChain(evolvesToData)}
              </div>
            ))}
        </div>
      </div>
    );
  };

  return(
    <>
      {pokemonEvolution && renderEvolutionChain(pokemonEvolution)}
    </>
  )
}

export default EvolutionChain;
