import React from "react";
import { useOutletContext } from "react-router-dom";

function Stats(){
    const pokemon = useOutletContext()

    return ( pokemon &&
            <div className="datas-container">
            {pokemon.stats.map(stat => 
                <div className="pokemon-stats">
                    <p>{stat.stat.name}</p>
                    <div className="stats">
                        <p>{stat["base_stat"]}</p>
                        <div className="statsBar progress">
                            <div className="bar" style={{maxWidth: `${stat["base_stat"]}%` }}></div>
                        </div>
                    </div>
                </div>)}

                
            </div>
    )
}

export default Stats