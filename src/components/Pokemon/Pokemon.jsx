import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/transition.css"
import './pokemon.css'
import useSwipe from "../../hook/useSwipe";
export default function Pokemon({
    currentPokemon, 
    image, 
    pokemonSpecies, 
    types, 
    hasNextPokemon, 
    hasPreviousPokemon, 
    nextPokemonImage, 
    prevPokemonImage}){

    const [transition, setTransition] = useState("")
    const navigate = useNavigate()

    const handleNextImageClick = () => {
        setTransition("animate__animated animate__slideInRight");
        setSwipeDirection("")
      }
    
    const handlePrevImageClick = () => {
        setTransition("animate__animated animate__slideInLeft");
        setSwipeDirection("")
      };

    const { onTouchStart, onTouchMove, onTouchEnd, swipeDirection, setSwipeDirection } = useSwipe(
        () => {
        currentPokemon.id <= 150 &&
          navigate(`/pokemons/${currentPokemon.id + 1}`);
          setTransition("")
          
        },
        () => {
        currentPokemon.id >= 2 && 
          navigate(`/pokemons/${currentPokemon.id - 1}`);
          setTransition("") 
        }
      );   

    return (
        <>   
        <div className="header-detail" >
            <Link to="/pokemons" > &larr;</Link>
                <div className="pokemon-name-id-container">
                    <h1>{currentPokemon.name}</h1>
                    <p className="pokemon-id">{`#${String(currentPokemon.id).padStart(3, "0")}`}</p>
                </div>

                <div className="pokemon-species-type-container">
                    <div className="pokemon-type-container">
                        {types.map(type => 
                            <p key={type} className="pokemon-type">
                                {type}  
                            </p>
                        )}
                    </div>
                    <p className="pokemon-species">{pokemonSpecies}</p>
                </div>
        </div>
            <div className="pokemon-detail-container" key={currentPokemon.id}>

                <div
                    className={`imgs-container`}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    >
                    <div className="pokemon-img-container" id="current-pokemon-image">
                            <img className={`pokemon-img-data ${transition} ${swipeDirection}`} src={image}></img>
                            <img className="pokeball-an" src={"../../pokeball.png"}></img>
                        </div>
                    
                    <div className="pokemon-queue">
                        {hasNextPokemon && 
                            <Link to={`/pokemons/${currentPokemon.id + 1}`}>
                                <img onClick={handleNextImageClick} 
                                src={nextPokemonImage} 
                                className={`queue next-pokemon ${transition} ${swipeDirection}`}
                                ></img>
                            </Link>}
                            
                        {hasPreviousPokemon && 
                            <Link to={`/pokemons/${currentPokemon.id - 1}`}>
                                <img onClick={handlePrevImageClick} 
                                src={prevPokemonImage}  
                                className={`queue prev-pokemon ${transition} ${swipeDirection}`}
                                >
                                </img>
                            </Link>}
                    </div>
                </div>                    
            </div>
        </>
    )
}