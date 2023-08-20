import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPokemonEvolution, getPokemons } from "../../api";

function Evolution() {
  const { id } = useParams();
  const [pokemonEvolution, setPokemonEvolution] = useState(null);
  const [pokemonImages, setPokemonImages] = useState({});
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    async function loadPokemonEvolutions() {
      try {
        const res = await getPokemonEvolution(id);
        const { chain } = await res.json();
        setPokemonEvolution(chain);
        const { sprites } = await getPokemons(url);
        setPokemonImages((prevState) => ({
          ...prevState,
          [id]: sprites.front_default
        }));
        loadEvolutionImages(chain);
      } catch (err) {
        console.log(err);
      }
    }
    loadPokemonEvolutions();
  }, [id]);

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
              <div key={evolvesToData.species.name} className="evolution-chain">
                {renderEvolutionChain(evolvesToData)}
              </div>
            ))}
        </div>
      </div>
    );
  };

  return (
    <div className="showUp">
      {pokemonEvolution && renderEvolutionChain(pokemonEvolution)}
    </div>
  );
}

export default Evolution;
