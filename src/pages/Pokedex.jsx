import React from "react";
import setBodyColor from "../utils/setBodyColor";
import Pokemons from "../components/Pokemons";
import { PokedexContext } from "../context/PokedexContext";
import GenericList from "../components/GenericList";


function Pokedex(){

    setBodyColor({color:" #fff"})
    return( 
            <div className="pokedex-container">
                <GenericList context={PokedexContext} DisplayComponent={Pokemons}/>
            </div>
        )
        
}

export default React.memo(Pokedex)