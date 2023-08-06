import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { getPokemonsDescription } from "../../api";
import PokemonDetail from "./PokemonDetail";

function About(){
    const pokemon = useOutletContext()
    const [pokemonDescription, setPokemonDescription] = React.useState(null)
    const {id} = useParams()
    React.useEffect(() => {
        async function loadPokemonDescrition(){
            const data = await getPokemonsDescription(id)
            setPokemonDescription(data)
        } 
        loadPokemonDescrition()
    }, [])
    
    const femaleRate = pokemonDescription && pokemonDescription['gender_rate']/8*100
    const maleRate = 100 - femaleRate 
    return ( pokemonDescription &&
        <div className="about-container">
            <div className="description-pokemon">
                <p>{pokemonDescription["flavor_text_entries"][0]["flavor_text"]}</p>
            </div>

            <div className="pokemon-sizes">
                <div>
                    <p>Weight</p>
                    <p>{`${pokemon.weight} kg`}</p>
                </div>
                <div>
                    <p>Height</p>
                    <p>{`${pokemon.height*10} cm`}</p>
                </div>
            </div>

            <div className="pokemon-breeding">
                <h3>Breeding</h3>
                <div className="pokemon-genders-rate">
                    <p>Gender</p>
                    <p><i class="fa-solid fa-mars" style={{color:" #7aabff"}}></i>{maleRate}%</p>
                    <p><i className="fa-solid fa-venus" style={{color: "#ff99f1"}}></i>{femaleRate}%</p>
                </div>

                <div>
                    
                </div>

                <div>
                    
                </div>
            </div>

            <div className="pokemon-breeding">

            </div>
        </div>
    )
}


export default About