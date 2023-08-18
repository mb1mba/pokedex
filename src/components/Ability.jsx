import React from "react";
import { Link } from "react-router-dom";

function Ability({element}){
   const name = element?.name;
   const description = element?.["flavor_text_entries"]?.[0]["flavor_text"];
   const effect = element?.["effec_entries"]?.[0].effect

    return(
        <div className="datas-container">
        <Link key={name} to={name}className="moves">
            <div data-aos="fade-up"> 
                <div className={`item-container`}>
                    <div className="item-desc">
                        <p className="item">{name}</p>
                    </div>

                    <div className="pokemon-move-characteristic">
                        <p>{effect}</p>
                        <p className="move-description">{description}</p>
                        </div>  
                    </div>
                    <hr/>
                </div>
        </Link> 
</div>
    )
}

export default React.memo(Ability)