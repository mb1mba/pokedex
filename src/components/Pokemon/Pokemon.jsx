import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/transition.css"
import './pokemon.css'

export default function Pokemon({
    currentPokemon, 
    image, 
    pokemonSpecies, 
    types, 
    hasNextPokemon, 
    hasPreviousPokemon, 
    nextPokemonImage, 
    prevPokemonImage}){
    const navigate = useNavigate()
    const [transition, setTransition] = useState("")

    const handleNextImageClick = () => {
        setTransition("animate__animated animate__fadeInRight");
      }
    
      const handlePrevImageClick = () => {
        setTransition("animate__animated animate__fadeInLeft");
      };

      const [touchStart, setTouchStart] = useState(null);
      const [touchEnd, setTouchEnd] = useState(null);
    
      // the required distance between touchStart and touchEnd to be detected as a swipe
      const minSwipeDistance = 50;
    
      const onTouchStart = (e) => {
        setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX);
      };
    
      const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
    
      const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
    
        if (isLeftSwipe) {
          // Navigate to the previous Pokémon page
          navigate(`/pokemons/${currentPokemon.id + 1}`); // You can use this to go back to the previous page
        } else if (isRightSwipe) {
          // Navigate to the next Pokémon page
          navigate(-1); // Replace with the actual URL of the next page
        }
      };
    
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

                <div className="imgs-container"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}>
                    <div className="pokemon-img-container" id="current-pokemon-image">
                            <img className={`pokemon-img-data ${transition}`} src={image}></img>
                            <img className="pokeball-an" src={"../../pokeball.png"}></img>
                        </div>
                    
                    <div className="pokemon-queue">
                        {hasNextPokemon && 
                            <Link to={`/pokemons/${currentPokemon.id + 1}`}>
                                <img onClick={handleNextImageClick} 
                                src={nextPokemonImage} 
                                className={`queue next-pokemon ${transition}`}
                                ></img>
                            </Link>}
                            
                        {hasPreviousPokemon && 
                            <Link to={`/pokemons/${currentPokemon.id - 1}`}>
                                <img onClick={handlePrevImageClick} 
                                src={prevPokemonImage}  
                                className={`queue prev-pokemon ${transition}`}
                                >
                                </img>
                            </Link>}
                    </div>
                </div>                    
            </div>
        </>
    )
}