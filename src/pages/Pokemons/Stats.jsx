import React from "react";
import { useOutletContext } from "react-router-dom";

function Stats(){

    const pokemon = useOutletContext()
    const color = document.documentElement.style.cssText.slice(13, 20)

    return ( pokemon &&
            <div className="showUp">
                <div className="base-stats-container">
                    {pokemon.stats.map(stat => 
                    <div className="pokemon-stats">
                        <p className="stat-category"style={{color: color}}>{stat.stat.name}</p>
                        <div className="base-stats">
                            <p>{stat["base_stat"]}</p>
                            <div className="statsBar progress">
                                <div className="bar" style={{maxWidth: `${stat["base_stat"]}%`, backgroundColor:color}}></div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
    )
}

export default Stats