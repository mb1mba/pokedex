import React from "react";
import "./move.css"
function Move({element}){

    const name = element?.name
    const type = element?.type?.name
    const description = element?.["flavor_text_entries"]?.[0]?.["flavor_text"]
    const power = element?.power
    const accuracy = element?.accuracy
    const pp = element?.pp
    
    return(  
        <div key={name} to={name}className="moves">
            <div data-aos="fade-up"> 
                <div className={`pokemon-moves-details ${type}`}>
            
                    <div className="move-desc">
                        <p className="pokemon-move">{name}</p>
                        <p className={`pokemon-move-type ${type}`}>
                        <img loading="lazy" src={`../../${type}.svg`} className={`logo-type ${type}`}></img>
                            <span>
                                <p className="move-type">{type.toUpperCase()}</p>
                            </span>
                        </p>
                    </div>

                    <div className="pokemon-move-characteristic">
                        <p className="move-description">{description}</p>
                    </div>  

                    <div className="move-stats">
                        <div className="stats">
                            <p className="stats-element">ACCURACY</p>
                            <p>{accuracy ? accuracy : "-"}</p>
                        </div>
                        
                        <div className="stats">
                            <p className="stats-element">POWER</p>
                            <p>{power ? power : "-"}</p>
                        </div>

                        <div className="stats">
                            <p className="stats-element">PP</p>
                            <p>{pp ? pp : "-"}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div> 
    )
}

export default React.memo(Move)