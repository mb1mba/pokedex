import React from "react";
import Pokemons from "../components/Pokemons/Pokemons";
import setBodyColor from "../utils/setBodyColor";
import { PokedexContext } from "../context/PokedexContext"; 
import GenericList from "../components/GenericList";
import './pokedex.css'
function Pokedex(){

     setBodyColor({color:" #fff"})
    return( 
            <div className="pokedex-container">
                <GenericList context={PokedexContext} DisplayComponent={Pokemons}/>
            </div>
        )
        
}

export default React.memo(Pokedex)