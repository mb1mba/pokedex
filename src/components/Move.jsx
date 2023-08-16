import React from "react";
import { Link } from "react-router-dom";

function Move({element}){

    const name = element?.name
    const type = element?.type.name
    const description = element?.["flavor_text_entries"][0]?.["flavor_text"]
    const power = element?.power
    const accuracy = element?.accuracy

    return(
        <div className="datas-container">
                <Link key={name} to={name}className="moves">
                    <div data-aos="fade-up"> 
                        <div className={`pokemon-moves-details ${type}`}>
                            <div className="move-desc">
                                <p className="pokemon-move">{name}</p>
                            </div>

                            <div className="pokemon-move-characteristic">
                                <p className="move-description">{description}</p>
                                    <div className="move-stats">
                                        <p className="move-accuracy">{accuracy ? accuracy : "-"}</p>
                                        <p className="move-power">{power ? power : "-"}</p>
                                    </div>
                                    <img loading="lazy" src={`../../${type}.svg`} className={`logo-type ${type}`}></img>
                                </div>  
                            </div>
                            <hr/>
                        </div>
                </Link> 
        </div>
    )
}

export default React.memo(Move)