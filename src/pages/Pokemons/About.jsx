import React, { useState, useEffect }from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { getPokemonsDescription } from "../../api";

function About(){

    const pokemon = useOutletContext()
    const [femaleRate, setFemaleRate] = useState(null);
    const [maleRate, setMaleRate] = useState(null);
    const [pokemonDescription, setPokemonDescription] = useState(null)
    const [eggGroupes, setEggGroupes] = useState(null);
    const {id} = useParams()
    const [genderRate, setGenderRate] = useState(null)

    useEffect(() => {
        async function loadPokemonDescrition(){
            const data = await getPokemonsDescription(pokemon.id)
            setPokemonDescription(data);
            setGenderRate(data?.["gender_rate"]) 
            setMaleRate(genderRate === -1 ? 100 : 100 - femaleRate);
            setFemaleRate(genderRate === 8 ? 100 : (genderRate / 8) * 100);
            setEggGroupes(data["egg_groups"][0].name)
        } 
        loadPokemonDescrition()
    }, [id, genderRate, femaleRate])

    return ( pokemonDescription &&
        <div className="showUp">
            <div className="description-pokemon">
                <p>{pokemonDescription["flavor_text_entries"][0]["flavor_text"]}</p>
            </div>

            <div className="pokemon-sizes">
                <div>
                    <p className="size">Weight</p>
                    <p>{`${pokemon.weight/10} kg`}</p>
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
                    <p><i className="fa-solid fa-mars" style={{color:" #7aabff"}}></i>{ maleRate <= 0 ? 0 : maleRate}%</p>
                    <p><i className="fa-solid fa-venus" style={{color: "#ff99f1"}}></i>{ femaleRate <= 0 ? 0 : femaleRate}%</p>
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

                <div className="pokemon-section">
                    <h3>Abilities</h3>
                    <div className="pokemon-elements">
                    {pokemon.abilities.map(ability => 
                        <p className="elements-title abilities" >{ability.ability.name}</p>
                    )}
                    </div>
                </div>
        </div>
    )
}


export default About