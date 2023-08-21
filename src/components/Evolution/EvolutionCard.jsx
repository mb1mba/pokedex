import React from "react";
import { Link } from "react-router-dom";
import {getImageURL} from "../../utils/getImageUrl"
import './evolutionCard.css'
function EvolutionCard({ data }) {
  const species = data?.species
  const name = species?.name
  const url = species?.url
  const id = url?.split("/").slice(-2, -1)[0];
  
  return (
    <>
      <div className="pokemon-card">
      <Link to={`/pokemons/${id}`}>
        <img className="evolution-img" src={getImageURL(id)} alt={name} />
      </Link>
      <p>{name}</p>
    </div>
    </>);
}

export default EvolutionCard;