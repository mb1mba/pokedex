import React from "react";
import './ability.css'

function Ability({element}){

   const name = element?.name;
   const description = element?.["flavor_text_entries"]?.[0]["flavor_text"];

    return(
        <div className="datas-container">
        <div key={name} className="moves">
            <div data-aos="fade-up"> 
                <div className="card">
                    <div className="item-image-container">
                        <p className="item-category">{name}</p>
                    </div>

                    <div className="pokemon-item-characteristic">
                        <p className="move-description"><span className="span-text">Description </span>: {description}</p>
                        </div>  
                    </div>
                </div>
        </div> 
</div>
    )
}

export default React.memo(Ability)