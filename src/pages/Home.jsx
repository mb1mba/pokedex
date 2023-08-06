import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
            <h1>Welcome to the pokedex</h1>
            <div className="link-container">
                <Link to="pokemons" className="links pokedex">Pokedex</Link>
                <Link to="moves" className="links moves">Moves</Link>
                <Link to="abilities" className="links abilities">Abilities</Link>
                <Link to="items" className="links items">Items</Link>
            </div>
        </>
    )
}

export default Home