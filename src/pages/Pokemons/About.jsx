import React, { useState }from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { getPokemonsDescription } from "../../api";

function About(){
    const pokemon = useOutletContext()
    const [femaleRate, setFemaleRate] = useState(null);
    const [maleRate, setMaleRate] = useState(null);
    const [pokemonDescription, setPokemonDescription] = useState(null)
    const [eggGroupes, setEggGroupes] = useState(null);
    const {id} = useParams()


    React.useEffect(() => {
        async function loadPokemonDescrition(){
            const data = await getPokemonsDescription(pokemon.id)
            setPokemonDescription(data);

            const genderRate = data["gender_rate"];
            setFemaleRate((genderRate / 8) * 100);
            setMaleRate(100 - femaleRate);

            setEggGroupes(data["egg_groups"][0].name)
        } 
        loadPokemonDescrition()
    }, [id])

    return ( pokemonDescription &&
        <div className="about-container">
            <div className="description-pokemon">
                <p>{pokemonDescription["flavor_text_entries"][0]["flavor_text"]}</p>
            </div>

            <div className="pokemon-sizes">
                <div>
                    <p className="size">Weight</p>
                    <p>{`${pokemon.weight} kg`}</p>
                </div>
                <div>
                    <p className="size">Height</p>
                    <p>{`${pokemon.height*10} cm`}</p>
                </div>
            </div>

            <div className="pokemon-section">
                <h3>Breeding</h3>
                <div className="pokemon-elements">
                    <p className="elements-title">Gender</p>
                    <p><i className="fa-solid fa-mars" style={{color:" #7aabff"}}></i>{maleRate}%</p>
                    <p><i className="fa-solid fa-venus" style={{color: "#ff99f1"}}></i>{femaleRate}%</p>
                </div>

                <div className="pokemon-elements">
                    <p  className="elements-title" >Egg Groupes</p>
                    {pokemonDescription && <p>{eggGroupes}</p>}
                </div>
            </div>

                <div className="pokemon-section">
                    <h3>Training</h3>
                    <div className="pokemon-elements">
                    <p className="elements-title" >Base EXP</p>
                        <p>{pokemon["base_experience"]}</p>
                    </div>
                </div>
        </div>
    )
}


export default About