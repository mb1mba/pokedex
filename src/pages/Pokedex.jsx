import React from "react";
import Pokemons from "../components/Pokemons/Pokemons";
import setBodyColor from "../utils/setBodyColor";
import { PokedexContext } from "../context/PokedexContext"; 
import GenericList from "../components/GenericList";

function Pokedex(){

     setBodyColor({color:" #fff"})
    return( 
            <div className="pokedex-container page">
                <GenericList context={PokedexContext} DisplayComponent={Pokemons}/>
            </div>
        )
        
}

export default React.memo(Pokedex)